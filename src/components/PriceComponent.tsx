import React from "react";

type ProductProps = {
  price: number;
  discount: number;
};

const ProductPrice: React.FC<ProductProps> = ({ price, discount }) => {
  if (discount > 0) {
    const discountedPrice = price - (price * discount) / 100;

    return (
      <p>
        <span>{price} $</span>
        <strong>{discountedPrice} $</strong>
      </p>
    );
  } else {
    return <p>{price} $</p>;
  }
};

export default ProductPrice;
