import ContactDetail from "./ContactDetail";

function ContactDetails() {
  return (
    <div className="flex flex-col justify-evenly gap-6 bg-commontext px-8 text-white tab:gap-8 tab:p-8">
      <ContactDetail
        type="address"
        value="1234 Maplewood Lane, Portland, OR 97218"
      />
      <ContactDetail type="phone" value="555-123-4567" />
      <ContactDetail type="email" value="cafe@sop.com" />
      <ContactDetail>
        <a href=""></a>
      </ContactDetail>
    </div>
  );
}

export default ContactDetails;
