"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const processingRows = [
  {
    purpose: "Providing, operating and maintaining our website",
    information: "IP address, browser type",
    basis: "We have a legitimate interest in our website working properly",
  },
  {
    purpose: "Improving, personalizing, and expanding our website",
    information: "IP address, date and time stamp of your visit, referring/exit page, number of clicks",
    basis: "We will obtain your prior consent for these purposes",
  },
  {
    purpose: "Understanding and analyzing how you use our website",
    information: "IP address, date and time stamp, referring/exit page, number of clicks",
    basis: "We will obtain your prior consent for these purposes",
  },
  {
    purpose: "Dealing with inquiries, and other communications from you",
    information:
      "Name, email address, phone number, content of the message and other information you provide",
    basis: "This is necessary to fulfil our contract with you",
  },
  {
    purpose: "Marketing products which may be of potential interest to you and offering promotions",
    information: "Name, email address, telephone number and marketing preferences",
    basis:
      "We have a legitimate interest to provide you with information about our products including those that are the same or similar to the ones you have inquired about. If we cannot rely on legitimate interest as our lawful basis for processing, then we will obtain consent from you.",
  },
  {
    purpose: "Detecting fraud and troubleshooting",
    information: "IP address, date and time stamp of your visit, ISP, device ID",
    basis: "We have a legitimate interest in ensuring our systems are secure",
  },
  {
    purpose: "Delivering and presenting advertising content",
    information: "IP address, device ID, geographical location",
    basis:
      "We have a legitimate interest to process your Personal Data to deliver and present advertising to you. If we cannot rely on legitimate interest as our lawful basis for processing, then we will obtain consent from you.",
  },
  {
    purpose: "Creating an account with us",
    information: "Name, company name, address, email address, telephone number",
    basis: "This is necessary to fulfil our contract with you",
  },
] as const;

const gdprRights = [
  {
    title: "The right to access",
    text: "You have the right to request copies of your personal data.",
  },
  {
    title: "The right to rectification",
    text: "You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
  },
  {
    title: "The right to erasure",
    text: "You have the right to request that we erase your personal data, under certain conditions.",
  },
  {
    title: "The right to restrict processing",
    text: "You have the right to request that we restrict the processing of your personal data, under certain conditions.",
  },
  {
    title: "The right to withdraw consent or Right of Opposition",
    text: "You have the right to object or withdraw consent at any time to processing of your personal data e.g. for marketing purposes, provided that no legitimate interest exists prevailing over your interests, rights and freedoms, such as defending a right in a judicial process.",
  },
  {
    title: "The right to data portability",
    text: "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
  },
  {
    title: "The right not to be subject to any automated decision making and profiling",
    text: "You have the right to avoid decisions based solely on automated processing if they have legal or significant effects on you.",
  },
  {
    title: "The right to complain",
    text: "You have the right to complain to the supervisory authority.",
  },
] as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[24px] font-semibold tracking-[-0.4px] text-[var(--color-ink)] md:text-[28px]">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] leading-[1.75] text-[var(--color-slate)] md:text-[17px]">{children}</p>
  );
}

export function PrivacyPolicyContent() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-home-mesh)]" />
        <Container className="relative pb-12 pt-[120px] md:pb-16 md:pt-[140px]">
          <FadeUp className="max-w-3xl space-y-5">
            <SectionLabel label="Legal" accent="blue" />
            <h1 className="font-heading text-[40px] font-semibold leading-[1.12] tracking-[-0.72px] text-[var(--color-ink)] md:text-[56px] md:leading-[62px]">
              Privacy Policy
            </h1>
            <p className="max-w-2xl text-[16px] leading-[1.7] text-[var(--color-slate)] md:text-[18px]">
              How Lemma Media Inc. collects, uses, and protects Personal Data when you visit our
              website or inquire about our products.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-20">
        <Container>
          <article className="w-full space-y-12">
            <section className="space-y-4">
              <SectionTitle>1. General</SectionTitle>
              <Paragraph>
                We at Lemma Media Inc. (“Lemma Technologies”, “we” or “us”) value your privacy and
                are committed to taking care of your Personal Data, which is a responsibility that we
                take very seriously. This Privacy Policy explains how we may use the Personal Data we
                collect when you visit our website, inquire about our products, or when you access
                websites, apps, or other digital properties that are being monetized through our
                products.
              </Paragraph>
              <Paragraph>This Privacy Policy is not applicable to any information collected offline.</Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>2. Definitions</SectionTitle>
              <dl className="space-y-4 text-[16px] leading-[1.75] text-[var(--color-slate)] md:text-[17px]">
                <div>
                  <dt className="font-semibold text-[var(--color-ink)]">Data Controller</dt>
                  <dd>
                    means the party that determines the purposes and means of the Processing of
                    Personal Data (“Controller”).
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--color-ink)]">GDPR</dt>
                  <dd>
                    is a regulation in EU law on data protection and privacy in the European Union
                    (EU) and the European Economic Area (EEA); Regulation (EU) 2016/679 (“GDPR”).
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--color-ink)]">Personal information</dt>
                  <dd>
                    means information that (either in isolation or in combination with other
                    information) enables you to be directly or indirectly identified (“Personal
                    Information” or “Personal Data”).
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--color-ink)]">Recipient</dt>
                  <dd>
                    means an entity, authority or agency to which the Personal Information is
                    disclosed (“Recipient”).
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--color-ink)]">Third party</dt>
                  <dd>
                    means a party that processes Personal Information on the Controller’s behalf
                    (“Third Party”).
                  </dd>
                </div>
              </dl>
            </section>

            <section className="space-y-4">
              <SectionTitle>3. Personal Information we collect</SectionTitle>
              <Paragraph>
                The Personal Information that you are asked to provide, and the reasons why you are
                asked to provide it, will be made clear to you at the point we ask you to provide your
                Personal Information.
              </Paragraph>
              <Paragraph>
                If you contact us directly, we may receive additional information about you such as
                your name, email address, phone number, the contents of the message and/or attachments
                you may send us, and any other information you may choose to provide.
              </Paragraph>
              <Paragraph>
                Lemma Technologies follows a standard procedure of using log files. These files log
                visitors when they visit websites. All hosting companies do this as part of hosting
                services’ analytics. The information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
                referring/exit pages, and possibly the number of clicks. The purpose of the information
                is for analyzing trends, administering the site, tracking users’ movement on the
                website, and gathering demographic information.
              </Paragraph>
              <Paragraph>
                When you register for an Account, we may ask for your contact information, including
                items such as name, company name, address, email address, and telephone number.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>4. How and on what legal basis we use your Personal Information</SectionTitle>
              <Paragraph>
                The table below describes the main purposes for which we process your Personal
                Information, the categories of your information involved and our lawful basis for
                being able to do this.
              </Paragraph>
              <div className="overflow-x-auto rounded-[12px] border border-[var(--color-border)]">
                <table className="min-w-[640px] w-full text-left text-[14px] leading-[1.55]">
                  <thead className="bg-[#f7f8f9] text-[var(--color-ink)]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Purpose</th>
                      <th className="px-4 py-3 font-semibold">Personal Information used</th>
                      <th className="px-4 py-3 font-semibold">Lawful basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processingRows.map((row) => (
                      <tr key={row.purpose} className="border-t border-[var(--color-border)] align-top">
                        <td className="px-4 py-3 font-medium text-[var(--color-ink)]">{row.purpose}</td>
                        <td className="px-4 py-3 text-[var(--color-slate)]">{row.information}</td>
                        <td className="px-4 py-3 text-[var(--color-slate)]">{row.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Paragraph>
                Where we process your Personal Information on the legal basis of legitimate interest,
                we have a legitimate business or commercial reason to process your data which has been
                balanced against your rights and interests and those reasons do not override your
                rights and freedoms.
              </Paragraph>
              <Paragraph>
                To achieve the purposes mentioned above, it may be necessary in some cases for us to
                disclose your IP address and geographical location to our demand partners. This
                disclosure may occur through transmission, distribution, or another form of provision.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>5. Retention period for Personal Information we collect</SectionTitle>
              <Paragraph>
                We retain your Personal Information until it is no longer necessary to fulfil the
                purposes of collecting your Personal Information, or until you request us to erase or
                destroy your Personal Information. We may be required to retain certain information in
                order to comply with the laws which we are subject to.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>6. International Data Transfers</SectionTitle>
              <Paragraph>
                We may transfer and process your Personal Information outside the European Union (EU)
                and European Economic Area (EEA). This may include transferring Personal Information
                to other countries that might not have an adequate level of data protection under the
                GDPR, such as the United States, Singapore and Australia. When we engage in such
                international data transfers, we ensure that your information is adequately protected
                in accordance with the GDPR. We have implemented Standard Contractual Clauses (SCCs)
                issued by the European Commission to safeguard your privacy and maintain the security
                and confidentiality of your personal data during these transfers, in compliance with
                relevant regulations.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>7. Advertising Partners Privacy Policies</SectionTitle>
              <Paragraph>
                You may consult this list to find the Privacy Policy for each of the advertising
                partners of Lemma Technologies.
              </Paragraph>
              <Paragraph>
                Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or
                Web Beacons that are used in their respective advertisements and links that appear on
                Lemma Technologies, which are sent directly to users’ browser. They automatically
                receive your IP address when this occurs. These technologies are used to measure the
                effectiveness of their advertising campaigns and/or to personalize the advertising
                content that you see on websites that you visit.
              </Paragraph>
              <Paragraph>
                Note that Lemma Technologies has no access to or control over these cookies that are
                used by third-party advertisers.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>8. Third Party Privacy Policies</SectionTitle>
              <Paragraph>
                Lemma Technologies’ Privacy Policy does not apply to other advertisers or websites.
                Thus, we are advising you to consult the respective Privacy Policies of these
                third-party ad servers for more detailed information. It may include their practices
                and instructions about how to opt-out of certain options.
              </Paragraph>
              <Paragraph>
                You can choose to disable cookies through your individual browser options. To know
                more detailed information about cookie management with specific web browsers, it can
                be found at the browsers’ respective websites.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>9. Personal Information collected from other sources than from you</SectionTitle>
              <Paragraph>
                If we process your Personal Information, we usually collect Personal Information from
                you, and it is usually you who provides us with the Personal Information. Nevertheless,
                in individual cases, we may also obtain Personal Information from other sources, such
                as the IP address, device ID, and the device latitude and longitude from our
                third-party partners.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>10. CCPA Privacy Rights (Do Not Sell My Personal Information)</SectionTitle>
              <Paragraph>
                Under the CCPA, among other rights, California consumers have the right to:
              </Paragraph>
              <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[1.75] text-[var(--color-slate)] md:text-[17px]">
                <li>
                  Request that a business that collects a consumer’s personal data disclose the
                  categories and specific pieces of personal data that a business has collected about
                  consumers.
                </li>
                <li>
                  Request that a business delete any personal data about the consumer that a business
                  has collected.
                </li>
                <li>
                  Request that a business that sells a consumer’s personal data, not sell the
                  consumer’s personal data.
                </li>
              </ul>
              <Paragraph>
                If you make a request, we have one month to respond to you. If you would like to
                exercise any of these rights, please contact us.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>11. GDPR Data Protection Rights</SectionTitle>
              <Paragraph>
                We would like to make sure you are fully aware of all of your data protection rights.
                Every user is entitled to the following:
              </Paragraph>
              <ul className="space-y-3">
                {gdprRights.map((right) => (
                  <li key={right.title} className="text-[16px] leading-[1.75] text-[var(--color-slate)] md:text-[17px]">
                    <span className="font-semibold text-[var(--color-ink)]">{right.title}</span>
                    {" – "}
                    {right.text}
                  </li>
                ))}
              </ul>
              <Paragraph>
                If you make a request, we have one month to respond to you, unless it is a particular
                complex request. If you would like to exercise any of these rights, please contact us.
              </Paragraph>
              <Paragraph>
                We value your privacy and your rights as a data subject and have therefore appointed
                Prighter Group with its local partners as our privacy representative and your point of
                contact for the following regions: European Union (EU) and United Kingdom (UK).
              </Paragraph>
              <Paragraph>
                Prighter gives you an easy way to exercise your privacy-related rights (e.g. requests
                to access or erase personal data).
              </Paragraph>
              <Paragraph>
                If you want to contact us via our representative, Prighter or make use of your data
                subject rights, please visit the following website:{" "}
                <a
                  href="https://prighter.com/q/16169978399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--color-blue-link)] hover:underline"
                >
                  https://prighter.com/q/16169978399
                </a>
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>12. Children’s Information</SectionTitle>
              <Paragraph>
                Another part of our priority is adding protection for children while using the
                internet. We encourage parents and guardians to observe, participate in, and/or
                monitor and guide their online activity.
              </Paragraph>
              <Paragraph>
                Lemma Technologies does not knowingly collect any Personally Identifiable Information
                (PII) from children under the age of 13. If you think that your child provided this
                kind of information on our website, we strongly encourage you to contact us
                immediately and we will do our best efforts to promptly remove such information from
                our records.
              </Paragraph>
            </section>

            <section className="space-y-4">
              <SectionTitle>13. Contact information</SectionTitle>
              <Paragraph>
                If you have any question or comments about this Privacy Policy, the ways in which we
                collect and use your Personal Information, your choices and rights regarding such use
                please do not hesitate to contact us:
              </Paragraph>
              <div className="rounded-[16px] border border-[var(--color-border)] bg-[#f7f8f9] p-6 text-[16px] leading-[1.75] text-[var(--color-slate)] md:text-[17px]">
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Controller’s identity:</span>{" "}
                  Lemma Media Inc.
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Email:</span>{" "}
                  <a
                    href="mailto:privacy@lemmatechnologies.com"
                    className="font-medium text-[var(--color-blue-link)] hover:underline"
                  >
                    privacy@lemmatechnologies.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-ink)]">Postal Address:</span> 530
                  Fifth Ave, 9th Floor New York, New York 10036
                </p>
              </div>
            </section>
          </article>
        </Container>
      </section>
    </>
  );
}
