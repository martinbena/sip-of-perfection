import HeadingTertiary from "./HeadingTertiary";

function ReservationInfo() {
  return (
    <article className="my-12 bg-brandtint">
      <div className="mx-auto max-w-5xl py-12 ">
        <HeadingTertiary>Reserve and update easily</HeadingTertiary>
        <p className="reservation__info mt-6">
          Welcome to our reservation page! Here, reserving a table is a breeze.
          If you've already filled your pre-order with delightful items, our
          system automatically processes it. Upon completion, make sure to jot
          down your unique reservation ID. To update pre-order or to cancel your
          reservation, simply enter your reservation ID in the search field
          above. Please ensure reservations are made at least 1 calendar day in
          advance. We appreciate your choice in Sip of Perfection and eagerly
          await the pleasure of serving you!
        </p>
      </div>
    </article>
  );
}

export default ReservationInfo;
