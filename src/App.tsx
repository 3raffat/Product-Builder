// import "./App.css";

import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  /* __________________RENDER____________________*/
  const ProductListRender = productList.map((product) => (
    <>
      <ProductCard Product={product} key={product.id} />
    </>
  ));
  return (
    <>
      <main className="container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-9">
          {ProductListRender}
        </div>
      </main>
    </>
  );
}

export default App;
