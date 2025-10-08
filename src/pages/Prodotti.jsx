//todo Importo lo stato e l'effetto
import { useState, useEffect } from "react";
import { useBudget } from "../components/BudgetContext";
import CardComponent from "../components/CardComponent";

const Prodotti = () => {
  const [product, setProduct] = useState([]);
  const { budgetMode } = useBudget(); 

  function fetchProduct() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }

    const filterProducts = budgetMode
    ? product.filter((p) => p.price <= 30)
    : product;

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="containerProdotti">
        <h4>{budgetMode ? "Modalità Budget Attiva" : "Tutti i Prodotti"}</h4>
        <div className="product"> 
            {filterProducts?.map((prod) => (
              <CardComponent key={prod.id} product={prod} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Prodotti;
