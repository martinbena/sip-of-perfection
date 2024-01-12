import HeadingSecondary from "./HeadingSecondary";

function ReservationInfo() {
  // screens: {
  //       dtxl: { min: "2540px" },
  //       dt: { max: "1540px" },
  //       dtsm: { max: "1344px" },
  //       tablg: { max: "1200px" },
  //       tab: { max: "944px" },
  //       moblg: { max: "704px" },
  //       mob: { max: "544px" },
  //       mobsm: { max: "440px" },
  //     },
  return (
    <article className="my-16 bg-brandtint">
      <div className="mx-auto grid max-w-8xl grid-cols-2 items-center gap-32 p-16 dtsm:gap-8 tablg:grid-cols-1 tablg:gap-20 tablg:text-center mob:gap-10 mob:px-4">
        <div>
          <HeadingSecondary>Reserve and update easily</HeadingSecondary>
          <p className="mb-6 mt-12">
            Welcome to our reservation page! Here, reserving a table is a
            breeze. If you've already filled your pre-order with delightful
            items, our system automatically processes it. Upon completion, make
            sure to jot down your unique reservation ID.
          </p>
          <p>
            To update pre-order or to cancel your reservation, simply enter your
            reservation ID in the search field above. It is only possible to
            make reservations at least 1 calendar day in advance. We appreciate
            your choice in Sip of Perfection and eagerly await the pleasure of
            serving you!
          </p>
        </div>
        <div>
          <img
            src="../src/assets/reserve.jpg"
            alt="Coffee and notebook"
            className="mx-auto rounded-lg tablg:w-2/3 moblg:w-full"
          />
        </div>
      </div>
    </article>
  );
}

export default ReservationInfo;
