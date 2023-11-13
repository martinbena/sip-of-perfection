function HeadingPrimary({ children }) {
  return (
    <h1 className="tab:text-4xl mx-auto mb-12 max-w-3xl font-heading text-5xl font-bold leading-tight text-white">
      {children}
    </h1>
  );
}

export default HeadingPrimary;

// mob: { max: "544px" },
//         moblg: { max: "704px" },
//         tab: { max: "944px" },
//         tablg: { max: "1200px" },
//         dtsm: { max: "1344px" },
