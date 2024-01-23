import { usePageTitle } from "../hooks/usePageTitle";
import ContactInfo from "../ui/ContactInfo";
import Subhero from "../ui/Subhero";
import Team from "../ui/Team";

function Contact() {
  usePageTitle("Contact us");
  return (
    <>
      <Subhero
        title="Contact us"
        subtitle="Locate, connect and enjoy – reach us anytime!"
        background="bg-contact-us"
      />
      <section className="bg-brandshade py-24">
        <ContactInfo />
        <Team />
      </section>
    </>
  );
}

export default Contact;
