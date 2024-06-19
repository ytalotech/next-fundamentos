interface ProductProps {
  params: {
    id: string
  }
}
export default async function Product(props: ProductProps) {
  return (
    <h1>Product: {props.params.id}</h1>
  );
}
