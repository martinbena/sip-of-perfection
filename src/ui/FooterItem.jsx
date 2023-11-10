function FooterItem({ title, children }) {
  return (
    <article>
      <h3 className="font-heading text-lg font-semibold text-white">
        <span className="border-b-2 border-accent pb-1">{title}</span>
      </h3>
      <div className="mt-12 flex flex-col gap-2">{children}</div>
    </article>
  );
}

export default FooterItem;
