import HeadingTertiary from "./HeadingTertiary";
import TeamMemberContact from "./TeamMemberContact";

function TeamMember({ fullName, position, phone, email, description, image }) {
  console.log(image);
  return (
    <div className="flex w-2/6 flex-col items-center gap-6 border-b-2 border-b-commontext px-10 pb-4 text-center dtsm:px-4 tablg:px-2 tab:w-5/12 tab:px-0 moblg:w-9/12 mobsm:w-11/12">
      <div className="[&>*:nth-child(1)]:mb-1">
        <HeadingTertiary>{fullName}</HeadingTertiary>
        <span className="text-sm capitalize italic">{position}</span>
      </div>
      <img className="rounded-lg" src={image} alt={`${position} ${fullName}`} />
      <div className="font-semibold child:w-max">
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
