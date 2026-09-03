/**
 * Sentinel href used in content data for CTAs that should open the demo form
 * in a modal. Links still resolve to the full page for new-tab / no-JS users.
 */
export const DEMO_MODAL_HREF = "#request-demo";
export const DEMO_PAGE_HREF = "/request-demo";

export function isDemoCta(href?: string) {
  return href === DEMO_MODAL_HREF;
}

const pathRoles: Record<string, string> = {
  "/solutions/brands-advertisers": "Brand / Advertiser",
  "/solutions/demand-partners": "Demand Partner",
  "/solutions/agencies": "Demand Partner",
  "/solutions/media-owners": "Media Owner",
  "/solutions/publishers": "Publisher",
  "/solutions/network-operators": "Network Operator",
};

const demandRoles = ["Brand / Advertiser", "Demand Partner", "Agency"];

/**
 * Prefills "I am a" from the page the visitor is on, corrected by CTA intent:
 * an "Advertise with us" click always lands on a demand-side role, a
 * "Partner with us" click on a supply-side one.
 */
export function resolveDemoRole({
  pathname,
  label,
}: {
  pathname?: string | null;
  label?: string;
}) {
  const pathRole = pathname ? pathRoles[pathname] : undefined;
  const intent = /advertise/i.test(label ?? "")
    ? "demand"
    : /partner/i.test(label ?? "")
      ? "supply"
      : undefined;

  if (!intent) return pathRole ?? "";

  if (intent === "demand") {
    return pathRole && demandRoles.includes(pathRole) ? pathRole : "Brand / Advertiser";
  }

  return pathRole && !demandRoles.includes(pathRole) ? pathRole : "Media Owner";
}
