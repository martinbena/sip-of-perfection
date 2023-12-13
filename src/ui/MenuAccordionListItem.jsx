function MenuAccordionListItem({ children, icon }) {
  return (
    <li
      className={`flex items-center gap-4 [&>*:nth-child(1)]:h-6 [&>*:nth-child(1)]:w-6  ${
        icon.type.name === "PiWarning"
          ? "[&>*:nth-child(1)]:text-yellow-800"
          : "[&>*:nth-child(1)]:text-green-800"
      }`}
    >
      {icon} {children}
    </li>
  );
}

export default MenuAccordionListItem;
