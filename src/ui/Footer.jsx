import FooterItem from "./FooterItem";
import Logo from "./Logo";
import SocialNetworks from "./SocialNetworks";
import Copyright from "./Copyright";
import Wave from "./Wave";

function Footer() {
  return (
    <>
      <Wave />
      <footer className="grid grid-cols-3 items-center justify-items-center gap-y-16 bg-commontext pb-24 pt-12 text-center text-white">
        <FooterItem title="Address">
          <p>Sip of Perfection</p>
          <p>1234 Maplewood Lane, Portland, OR 97218</p>
        </FooterItem>
        <FooterItem title="Contact">
          <p>
            <a href="tel:+5551234567">(555) 123-4567</a>
          </p>
          <p>
            <a href="mailto:cafe@sop.com">cafe@sop.com</a>
          </p>
        </FooterItem>
        <FooterItem title="Opening Hours">
          <p>Monday - Friday: 9 AM - 9 PM</p>
          <p>Saturday - Sunday: 8 AM - 11 PM</p>
        </FooterItem>
        <Logo type="footer" />
        <div>
          <SocialNetworks />
          <Copyright />
        </div>
      </footer>
    </>
  );
}

export default Footer;
