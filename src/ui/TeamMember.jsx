import HeadingTertiary from "./HeadingTertiary";
import TeamMemberContact from "./TeamMemberContact";

function TeamMember({ fullName, position, phone, email, description, image }) {
  console.log(image);
  return (
    <div className="flex flex-col items-center gap-6 px-16 text-center">
      <div className="[&>*:nth-child(1)]:mb-1">
        <HeadingTertiary>{fullName}</HeadingTertiary>
        <span className="text-sm capitalize italic">{position}</span>
      </div>
      <img className="rounded-lg" src={image} alt={`${position} ${fullName}`} />
      <div className="font-semibold">
        <TeamMemberContact phone={phone} />
        <TeamMemberContact email={email} />
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TeamMember;
