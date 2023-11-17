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
        name="instagram"
      />
      <SocialLink
        icon={<PiFacebookLogo />}
        link="https://www.facebook.com/"
        name="facebook"
      />
      <SocialLink
        icon={<PiTwitterLogo />}
        link="https://twitter.com/"
        name="twitter"
      />
    </p>
  );
}

export default SocialNetworks;
