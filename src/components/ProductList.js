import Product from "./Product";

export default function ProductList(props) {
  console.log(props);
  return props.prodList.length > 0 ? (
    props.prodList.map((prod, i) => {
      return (
        <Product
          prod={prod}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Products in the Cart</h1>
  );
}
