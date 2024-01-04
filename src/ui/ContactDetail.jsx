import { HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";

const ContactDetail = ({ type, value }) => {
  let icon, link;

  switch (type) {
    case "phone":
      icon = <HiPhone />;
      link = `tel:${value.replace(/-/g, "")}`;
      break;
    case "email":
      icon = <HiEnvelope />;
      link = `mailto:${value}`;
      break;
    case "address":
      icon = <HiMapPin />;
      break;
    default:
      return null;
  }

  return (
    <div
      className={`text-lg mobsm:text-base ${
        link
          ? "child:flex child:items-center child:gap-5"
          : "flex items-center gap-5"
      }`}
    >
      {link ? (
        <a href={link} className="hover:text-linkhover">
          <span className="child:h-8 child:w-8">{icon}</span>
          <span>{value}</span>
        </a>
      ) : (
        <>
          <span className="child:h-8 child:w-8">{icon}</span>
          <span>{value}</span>
        </>
      )}
    </div>
  );
};

export default ContactDetail;
