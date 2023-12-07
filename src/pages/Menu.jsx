import HeadingPrimary from "../ui/HeadingPrimary";
import { getMenu } from "../services/apiCafe";
import { useLoaderData } from "react-router-dom";
import MenuItems from "../features/menu/MenuItems";
import { useState } from "react";
import Pagination from "../features/menu/Pagination";
import MenuFunctions from "../features/menu/MenuFunctions";

function Menu() {
  const menu = useLoaderData();

  return (
    <section className="bg-commontext py-40 text-center">
      <HeadingPrimary>Our menu</HeadingPrimary>
      <MenuFunctions menu={menu} />
    </section>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
