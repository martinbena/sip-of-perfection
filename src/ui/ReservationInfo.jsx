import HeadingTertiary from "./HeadingTertiary";

function ReservationInfo() {
  return (
    <article className="my-16 bg-brandtint">
      <div className="mx-auto grid max-w-8xl grid-cols-2 items-center gap-32 p-16">
        <div>
          <HeadingTertiary>Reserve and update easily</HeadingTertiary>
          <p className="mb-3 mt-6">
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
            className="mx-auto max-w-seventy rounded-lg"
          />
        </div>
      </div>
    </article>
  );
}

export default ReservationInfo;
