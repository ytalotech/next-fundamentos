interface ProductProps {
  params: {
    data: string[]
  }
}
export default function Product({params}: ProductProps) {
  const [ productId, size, color ] = params.data;
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Product: {size}</p>
      <p>Product: {color}</p>
    </div>
  );
}
