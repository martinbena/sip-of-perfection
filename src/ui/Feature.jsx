function Feature({ icon, title, children }) {
  return (
    <div className="flex flex-col items-center justify-start text-center">
      <div className="mb-8 inline-block rounded-full bg-brand p-5 child:h-12 child:w-12">
        {icon}
      </div>
      <p className="text- mb-4 text-xl font-semibold capitalize">{title}</p>
      <p>{children}</p>
    </div>
  );
}

export default Feature;
