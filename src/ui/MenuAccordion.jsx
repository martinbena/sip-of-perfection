import { useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { PiWarning } from "react-icons/pi";
import { PiSmileyBold } from "react-icons/pi";
import { PiCheckBold } from "react-icons/pi";
import MenuAccordionListItem from "./MenuAccordionListItem";

function MenuAccordion() {
  const [isHidden, setIsHidden] = useState(false);

  function handleClick() {
    setIsHidden((isHidden) => !isHidden);
  }

  return (
    <div className="mb-16 flex items-center justify-center tab:px-8 mob:px-4">
      <div
        onClick={handleClick}
        className={`max-w-max cursor-pointer rounded-lg bg-white p-6 px-12 shadow-accordion moblg:px-6 ${
          isHidden ? "" : "space-y-8 border-t-4 border-commontext"
        }`}
      >
        <div className="grid grid-cols-[1fr_auto] gap-6">
          <p className="text-2xl font-semibold tab:text-xl mob:text-lg">
            How does the pre-order work?
          </p>
          <span>
            <IoIosArrowDropup
              className={`h-8 w-8 transition-all duration-300 ease-linear mob:h-7 mob:w-7 ${
                isHidden ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>

        <ul
          className={`flex flex-col gap-4 ${
            isHidden ? "invisible h-0 opacity-0" : "opacity-100"
          }`}
        >
          <MenuAccordionListItem icon={<PiCheckBold />}>
            Choose your desired items and then make a reservation
          </MenuAccordionListItem>
          <MenuAccordionListItem icon={<PiCheckBold />}>
            Our team prepares your chosen items in advance for prompt service
            upon arrival
          </MenuAccordionListItem>
          <MenuAccordionListItem icon={<PiCheckBold />}>
            The displayed price is informative - no upfront payment is needed
          </MenuAccordionListItem>
          <MenuAccordionListItem icon={<PiCheckBold />}>
            Feel free to modify your order on-site for flexibility
          </MenuAccordionListItem>
          <MenuAccordionListItem icon={<PiWarning />}>
            While adjustments are welcome upon arrival, please choose wisely
          </MenuAccordionListItem>
          <MenuAccordionListItem icon={<PiSmileyBold />}>
            Pre-order is possible even after the reservation is completed
          </MenuAccordionListItem>
        </ul>
      </div>
    </div>
  );
}

export default MenuAccordion;
