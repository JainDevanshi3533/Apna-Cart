import Navbar from "./components/Navbar";
import "./styles.css";
import ProductList from "./components/ProductList";
import { useState } from "react";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

export default function App() {
  const products = [
    { price: 10000, name: "Redmi", quantity: 0 },
    { price: 20000, name: "Samsung", quantity: 0 },
    { price: 80000, name: "Iphone", quantity: 0 }
  ];

  let [prodList, setProdList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProdList = [...prodList];
    newProdList[index].quantity++;
    setProdList(newProdList);

    let newTotalAmount = totalAmount;
    newTotalAmount += newProdList[index].price;
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    if (prodList[index].quantity > 0) {
      let newProdList = [...prodList];
      newProdList[index].quantity--;
      setProdList(newProdList);

      let newTotalAmount = totalAmount;
      newTotalAmount -= newProdList[index].price;
      setTotalAmount(newTotalAmount);
    }
    // let newProdList=[...prodList];
    // newProdList[index].quantity>0 ? newProdList[index].quantity-- : 0;
    // setProdList(newProdList);
  };

  const resetQuantity = () => {
    let newProdList = [...prodList];
    newProdList.map((products) => {
      products.quantity = 0;
    });
    setProdList(newProdList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProdList = [...prodList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProdList[index].quantity * newProdList[index].price;
    setTotalAmount(newTotalAmount);

    newProdList.splice(index, 1);
    setProdList(newProdList);
  };

  const addItem = (name, price) => {
    let newProdList = [...prodList];
    newProdList.push({
      price: price,
      name: name,
      quantity: 0
    });
    setProdList(newProdList);
  };

  return (
    <div className="App">
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          prodList={prodList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </div>
  );
}
