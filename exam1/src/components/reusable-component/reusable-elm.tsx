import React from "react";
import "./reusableStyle.css";
import img1 from "../asset/image/Tide-Logo1.png";
import { TiShoppingCart } from "react-icons/ti";

const productData = [
    //Add item 
  {
    id: 1,
    name: "Tide Powder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod nesciunt alias nemo iste reprehenderit officiis cum itaque, numquam eum perferendis omnis explicabo, minus totam qui ?",
    image: img1
  },
  {
    id:2,
    name: "Tide Powder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod nesciunt alias nemo iste reprehenderit officiis cum itaque, numquam eum perferendis omnis explicabo, minus totam qui ?",
    image: img1
  }
  
];

const ReusableComponent = () => {
  return (
    <div className="Container">
      <h1>E Commerce</h1>
      {productData.map((product) => (
        <div key={product.id} className="item1">
          <img src={product.image} alt={product.name} />
          <div className="discription">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <TiShoppingCart />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReusableComponent;