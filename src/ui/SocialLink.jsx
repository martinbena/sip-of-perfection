import { Link } from "react-router-dom";

function SocialLink({ link, icon, name }) {
  return (
    <Link
      to={link}
      target="_blank"
      rel="noopener noreferrer"
      className="child:h-6 child:w-6"
      aria-label={`Check our ${name}`}
    >
      {icon}
    </Link>
  );
}

export default SocialLink;
