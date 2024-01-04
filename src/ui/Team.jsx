import HeadingSecondary from "./HeadingSecondary";

const teamMembers = [
  {
    fullName: "Jordan Chamberlain",
    position: "owner",
    phone: "555-987-6543",
    email: "jordan@sop.com",
    description:
      "The creative force behind Sip of Perfection, devoted to crafting a warm and memorable atmosphere for all.",
    image: "../assets/jordan-chamberlain.jpg",
  },
  {
    fullName: "Sarah Mitchell",
    position: "manager",
    phone: "555-876-5432",
    email: "sarah@sop.com",
    description:
      "Guiding our seamless operations, our dedicated manager upholds the high standards of hospitality at Sip of Perfection.",
    image: "../assets/sarah-mitchell.jpg",
  },
  {
    fullName: "Lorenzo DiMatteo",
    position: "chef",
    phone: "555-765-4321",
    email: "lorenzo@sop.com",
    description:
      "Indulge in culinary excellence, where every dish reflects the chef's commitment to a memorable dining experience at Sip of Perfection.",
    image: "../assets/lorenzo-dimatteo.jpg",
  },
];

function Team() {
  return (
    <div className="[&>*:nth-child(1)]:text-center">
      <HeadingSecondary>Our Team</HeadingSecondary>
      <div></div>
    </div>
  );
}

export default Team;
