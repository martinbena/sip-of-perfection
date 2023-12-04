function Reservation() {
  return (
    <section className="overflow-hidden bg-commontext py-40 text-center">
      <HeadingPrimary>Resrervation</HeadingPrimary>
      <Form method="POST">
        <FormProvider>
          <DateTimeCheck />
          <GuestData />
        </FormProvider>
      </Form>
    </section>
  );
}

export default Reservation;
