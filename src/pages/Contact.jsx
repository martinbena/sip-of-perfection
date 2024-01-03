import ContactInfo from "../ui/ContactInfo";
import Subhero from "../ui/Subhero";

function Contact() {
  return (
    <>
      <Subhero
        title="Contact us"
        subtitle="Locate, connect and enjoy – reach us anytime!"
        background="bg-contact-us"
      />
      <section className="bg-brandshade py-24">
        <ContactInfo />
      </section>
    </>
  );
}

export default Contact;
