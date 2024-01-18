import HeadingSecondary from "./HeadingSecondary";
import TeamMember from "./TeamMember";
import teamMembers from "../data/teamMembers.json";

function Team() {
  return (
    <div className="mx-auto max-w-screen-2xl px-12 tablg:px-4 moblg:px-4">
      <div className="rounded-lg bg-brandtint p-8 shadow-team mob:px-4 [&>*:nth-child(1)]:mx-auto [&>*:nth-child(1)]:mb-12 [&>*:nth-child(1)]:max-w-max [&>*:nth-child(1)]:border-b-2 [&>*:nth-child(1)]:border-commontext [&>*:nth-child(1)]:pb-2">
        <HeadingSecondary>Our Team</HeadingSecondary>
        <div className="flex justify-center gap-8 tab:flex-wrap tab:gap-y-12">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.fullName}
              fullName={member.fullName}
              position={member.position}
              phone={member.phone}
              email={member.email}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
