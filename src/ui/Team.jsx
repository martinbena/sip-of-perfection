import HeadingSecondary from "./HeadingSecondary";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    fullName: "Jordan Chamberlain",
    position: "owner",
    phone: "555-987-6543",
    email: "jordan@sop.com",
    description:
      "The creative force behind Sip of Perfection, devoted to crafting a warm and memorable atmosphere for all.",
    image: "/src/assets/jordan-chamberlain.jpg",
  },
  {
    fullName: "Sarah Mitchell",
    position: "manager",
    phone: "555-876-5432",
    email: "sarah@sop.com",
    description:
      "Guiding our seamless operations, our dedicated manager upholds the high standards of hospitality at Sip of Perfection.",
    image: "/src/assets/sarah-mitchell.jpg",
  },
  {
    fullName: "Lorenzo DiMatteo",
    position: "chef",
    phone: "555-765-4321",
    email: "lorenzo@sop.com",
    description:
      "Indulge in culinary excellence, where every dish reflects the chef's commitment to a memorable dining experience at Sip of Perfection.",
    image: "/src/assets/lorenzo-dimatteo.jpg",
  },
];

function Team() {
  return (
    <div className="mx-auto max-w-screen-2xl px-12 [&>*:nth-child(1)]:mb-12 [&>*:nth-child(1)]:text-center">
      <HeadingSecondary>Our Team</HeadingSecondary>
      <div className="grid grid-cols-3 justify-items-center">
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
  );
}

export default Team;
