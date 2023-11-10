import { PiTwitterLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import SocialLink from "./SocialLink";

function SocialNetworks() {
  return (
    <p className="mb-8 flex justify-center gap-6 child-hover:text-accent">
      <SocialLink
        icon={<PiInstagramLogo />}
        link="https://www.instagram.com/"
      />
      <SocialLink icon={<PiFacebookLogo />} link="https://www.facebook.com/" />
      <SocialLink icon={<PiTwitterLogo />} link="https://twitter.com/" />
    </p>
  );
}

export default SocialNetworks;
