function MenuAccordionListItem({ children, icon, type }) {
  return (
    <li
      className={`flex items-center gap-4 mob:items-start ${
        type === "warning"
          ? "[&>*:nth-child(1)]:text-yellow-800"
          : "[&>*:nth-child(1)]:text-green-800"
      }`}
    >
      <span className="child:h-6 child:w-6">{icon}</span>
      <p className="mob:text-sm">{children}</p>
    </li>
  );
}

export default MenuAccordionListItem;
