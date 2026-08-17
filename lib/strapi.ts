import qs from "qs";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export function strapiUrl(path: string) {
  return `${STRAPI_URL}${path}`;
}

type StrapiResponse<T> = {
  data: T;
  meta?: Record<string, unknown>;
};

type StrapiCollectionResponse<T> = {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type StrapiMediaV4 = {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText?: string | null;
      width?: number;
      height?: number;
    };
  } | null;
};

type StrapiMediaV5 = {
  id: number;
  url: string;
  name?: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
};

export function getStrapiMediaUrl(
  media: StrapiMediaV4 | StrapiMediaV5 | null | undefined,
): string {
  if (!media) return "";

  let url: string | undefined;

  if ("url" in media && typeof media.url === "string") {
    url = media.url;
  } else if (
    "data" in media &&
    media.data &&
    "attributes" in media.data &&
    media.data.attributes?.url
  ) {
    url = media.data.attributes.url;
  }

  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

async function strapiFetch<T>(
  path: string,
  options?: RequestInit & { revalidate?: number },
): Promise<T> {
  const url = strapiUrl(path);
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options?.headers as Record<string, string>),
  };

  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }

  const { revalidate, ...fetchOptions } = options ?? {};

  const res = await fetch(url, {
    ...fetchOptions,
    headers,
    next: revalidate ? { revalidate } : undefined,
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => "");
    throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText} — ${errorText}`);
  }

  return res.json() as Promise<T>;
}

function buildQuery(params: Record<string, unknown>): string {
  return qs.stringify(params, { encodeValuesOnly: true });
}

export async function fetchCollection<T>(
  collection: string,
  options?: {
    filters?: Record<string, unknown>;
    populate?: string | Record<string, unknown>;
    sort?: string | string[];
    pagination?: { page?: number; pageSize?: number };
    revalidate?: number;
  },
): Promise<StrapiCollectionResponse<T>> {
  const query: Record<string, unknown> = {};

  if (options?.filters) query.filters = options.filters;
  if (options?.populate !== undefined) {
    query.populate = options.populate;
  } else {
    query.populate = "*";
  }
  if (options?.sort) query.sort = options.sort;
  if (options?.pagination) {
    query.pagination = options.pagination;
  } else {
    query.pagination = { pageSize: 100 };
  }

  const qs = buildQuery(query);
  const path = `/api/${collection}?${qs}`;
  return strapiFetch<StrapiCollectionResponse<T>>(path, {
    revalidate: options?.revalidate,
  });
}

export async function fetchSingle<T>(
  singleType: string,
  options?: {
    populate?: string | Record<string, unknown>;
    revalidate?: number;
  },
): Promise<StrapiResponse<T>> {
  const query: Record<string, unknown> = {};

  if (options?.populate !== undefined) {
    query.populate = options.populate;
  } else {
    query.populate = "*";
  }

  const qs = buildQuery(query);
  const path = `/api/${singleType}?${qs}`;
  return strapiFetch<StrapiResponse<T>>(path, {
    revalidate: options?.revalidate,
  });
}
