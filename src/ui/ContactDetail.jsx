import { HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";

const ContactDetail = ({ type, value }) => {
  let icon, link, ariaLabel;

  switch (type) {
    case "phone":
      icon = <HiPhone />;
      link = `tel:${value.replace(/-/g, "")}`;
      ariaLabel = "Call the cafe staff.";
      break;
    case "email":
      icon = <HiEnvelope />;
      link = `mailto:${value}`;
      ariaLabel = "Send an e-mail to the cafe staff.";
      break;
    case "address":
      icon = <HiMapPin />;
      break;
    default:
      return null;
  }

  return (
    <div className="text-lg child:flex child:max-w-max child:items-center child:gap-5 mobsm:text-base">
      {link ? (
        <a href={link} aria-label={ariaLabel} className="hover:text-linkhover">
          <span className="child:h-8 child:w-8">{icon}</span>
          <span>{value}</span>
        </a>
      ) : (
        <p>
          <span className="child:h-8 child:w-8">{icon}</span>
          <span>{value}</span>
        </p>
      )}
    </div>
  );
};

export default ContactDetail;
