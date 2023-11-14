import { TbCoffee } from "react-icons/tb";
import { TbCake } from "react-icons/tb";
import { TbChefHat } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";
import Feature from "./Feature";

function FeatureRow() {
  return (
    <section className="bg-brandtint py-24">
      <div className="m-auto grid max-w-7xl grid-cols-4 gap-12 dtsm:gap-8 dtsm:px-8 tablg:grid-cols-2 tablg:gap-16 moblg:grid-cols-1">
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
