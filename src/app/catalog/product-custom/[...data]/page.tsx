import { AddToCartButton } from "./add-to-cart-button";
import { Test } from "./test";

interface ProductProps {
  params: {
    data: string[]
  }
}
export default async function Product({params}: ProductProps) {
  const [ productId, size, color ] = params.data;

  const response = await fetch('https://api.github.com/users/ytalotech');
  const user = await response.json();

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Product: {size}</p>
      <p>Product: {color}</p> 

      <AddToCartButton>
        <Test />
      </AddToCartButton>    
    </div>
  );
}
