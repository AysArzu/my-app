import React from "react";
import { ProductCard } from "./product-card";

export const Products = () => {
  // bir componente bilgi gondermek icin prop lar kullanilir. 2 turlu prop vardir. Component taniminin icindeki name ve value seklindeki klasik prop lar ve componentin arasindaki children prop u.
  return (
    <div>
      <ProductCard title="Sony X5 Ultra" price="1000">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
        doloremque temporibus officiis minus totam at fugit? Libero quisquam vel
        laborum quos quibusdam dignissimos,<b>labore quaerat reprehenderit </b>a
        excepturi rem!
      </ProductCard>

      <ProductCard title="Sony X5 Ultra" price="1000">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
        doloremque temporibus{" "}
        <i> officiis minus totam at fugit? Libero quisquam vel laborum quos </i>
        quibusdam dignissimos,labore quaerat reprehenderit a excepturi rem!
      </ProductCard>
    </div>
  );
};
