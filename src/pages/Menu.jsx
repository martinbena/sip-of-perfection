import { getMenu } from "../services/apiCafe";
import { useLoaderData } from "react-router-dom";
import MenuFunctions from "../features/menu/MenuFunctions";
import Subhero from "../ui/Subhero";
import MenuAccordion from "../ui/MenuAccordion";

function Menu() {
  const menu = useLoaderData();

  return (
    <>
      <Subhero
        title="Our menu"
        subtitle="Pre-order, arrive and immediately indulge"
        background="bg-opening-hours"
      />
      <section className="bg-brandshade py-24">
        <MenuAccordion />
        <MenuFunctions menu={menu} />
      </section>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
