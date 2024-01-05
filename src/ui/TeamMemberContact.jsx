import { HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";

function TeamMemberContact({ fullName, phone, email }) {
  return (
    <p>
      <a
        className="flex items-center gap-4 border-b-2 border-transparent pb-0.5 hover:border-b-commontext"
        href={email ? `mailto:${email}` : `tel:${phone.replace(/-/g, "")}`}
        aria-label={
          email ? `Send an e-mail to ${fullName}` : `Call ${fullName}`
        }
      >
        <span className="child:h-5 child:w-5">
          {email ? <HiEnvelope /> : <HiPhone />}
        </span>
        <span>{email ? email : phone}</span>
      </a>
    </p>
  );
}

export default TeamMemberContact;
