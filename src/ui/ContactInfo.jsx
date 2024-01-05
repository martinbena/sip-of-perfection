import ContactDetails from "./ContactDetails";
import HeadingSecondary from "./HeadingSecondary";
import Map from "./Map";

function ContactInfo() {
  return (
    <div className="mb-20 px-4 [&>*:nth-child(1)]:mb-12 [&>*:nth-child(1)]:text-center">
      <HeadingSecondary>Get in touch</HeadingSecondary>
      <div className="flex justify-center">
        <div className="shadow-contact flex overflow-hidden rounded-lg tab:flex-col">
          <Map />
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
