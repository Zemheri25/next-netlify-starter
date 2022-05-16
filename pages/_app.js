import "../styles/globals.css";
import "../styles/Product.css";
import "../styles/Details.css";
import "../styles/Basket.css";
import MyProducstContext from "../context/ProductContext";

function Application({ Component, pageProps }) {
  return (
    <MyProducstContext>
      <Component {...pageProps} />
    </MyProducstContext>
  );
}

export default Application;
