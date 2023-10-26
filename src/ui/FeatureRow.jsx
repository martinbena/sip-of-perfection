import { TbCoffee } from "react-icons/tb";
import { TbCake } from "react-icons/tb";
import { TbChefHat } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";
import Feature from "./Feature";

function FeatureRow() {
  return (
    <section className="bg-brandtint py-24">
      <div className="container m-auto grid grid-cols-4 gap-8 px-8">
        <Feature title="Premium coffee selection" icon={<TbCoffee />}>
          Awaken your senses with our exquisite coffee blends.
        </Feature>
        <Feature title="Sweet temptations" icon={<TbCake />}>
          Satisfy your cravings with our delectable desserts.
        </Feature>
        <Feature title="Expert culinary team" icon={<TbChefHat />}>
          Meet our talented chefs behind the delicious creations.
        </Feature>
        <Feature title="Relaxing ambiance" icon={<TbHeart />}>
          Experience pure tranquility at our cafe.
        </Feature>
      </div>
    </section>
  );
}

export default FeatureRow;
