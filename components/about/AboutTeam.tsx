import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { advisors as defaultAdvisors, leadershipTeam as defaultTeam, type TeamMember } from "@/lib/about-data";

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group text-center">
      <div className="relative mx-auto mb-4 aspect-[277/400] w-full max-w-[220px] overflow-hidden rounded-[12px] bg-[#f5e6e0] transition-transform duration-300 group-hover:-translate-y-1">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="220px"
        />
      </div>
      <h3 className="text-[16px] font-bold tracking-[-0.28px] text-[var(--color-ink)]">
        {member.name}
      </h3>
      <p className="mt-1 text-[14px] leading-[1.4] text-[var(--color-slate)]">{member.role}</p>
    </article>
  );
}

export function AboutTeam({
  team,
  advisors,
}: {
  team?: TeamMember[];
  advisors?: TeamMember[];
}) {
  const teamData = team?.length ? team : defaultTeam;
  const advisorData = advisors?.length ? advisors : defaultAdvisors;
  return (
    <section id="team" className="bg-white py-16 md:py-[100px]">
      <Container>
        <div className="mb-12 text-center">
          <SectionLabel label="Leadership" align="center" dual />
          <h2 className="mt-5 text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Meet the team that
            <br />
            <span
              style={{
                backgroundImage: "var(--gradient-brand)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              defies the impossible
            </span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-10 text-center text-[24px] font-semibold tracking-[-0.44px] md:text-[32px]">
            Our{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-brand)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              trusted
            </span>{" "}
            advisers
          </h3>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advisorData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
