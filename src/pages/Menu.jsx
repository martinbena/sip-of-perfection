import { getMenu } from "../services/apiCafe";
import { useLoaderData } from "react-router-dom";
import MenuFunctions from "../features/menu/MenuFunctions";
import Subhero from "../ui/Subhero";

function Menu() {
  const menu = useLoaderData();

  return (
    <>
      <Subhero
        title="Our menu"
        subtitle="Pre-order, arrive and immediately indulge"
        background="bg-opening-hours"
      />
      <section className="bg-commontext py-40 text-center">
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
