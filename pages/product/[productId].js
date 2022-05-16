import { getProductById } from "../../lib/productSotre";
import { useState } from "react";
import Layout from "../../components/Layout";
import { BsHeart } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const productDetailsPage = ({ details }) => {
  const [changeImage, setChangeImage] = useState(true);
  const { list, setList, total, setTotal } = useContext(ProductContext);

  const handleAddBasket = () => {
    setList([...list, details]);
    setTotal(total += details.salePrice)
  };

  return (
    <Layout key={details.id}>
      <div className="detailsmain">
        <div className="imagesdiv">
          <div className="imagediv" onClick={() => setChangeImage(true)}>
            <img src={details.images[0]} alt={details.name} className="image" />
          </div>
          <div className="imagediv" onClick={() => setChangeImage(false)}>
            <img src={details.images[1]} alt={details.name} className="image" />
          </div>
        </div>

        <div className="imagemain">
          <img
            src={changeImage ? details.images[0] : details.images[1]}
            alt={details.name}
          />
        </div>

        <div className="informationmain">
          <div className="branddiv">
            <p>{details.brand}</p>
          </div>

          <div className="productname">
            <div className="detailsnamediv">
              <h3>{details.name}</h3>
            </div>

            <div>
              <BsHeart />
            </div>
          </div>

          <div className="originalmain">
            <div className="original">
              <GiTicket />
              <p>ORJİNAL ÜRÜN</p>
            </div>

            <div className="original">
              <FaBoxOpen style={{ fontSize: "3rem" }} />
              <p>500 TL VE ÜZERİ ALIŞVERİŞLERDE KARGO ÜCRETSİZ</p>
            </div>
          </div>

          <div className="fiyat">
            <h3>₺{details.salePrice}.00</h3>
          </div>

          <div className="addbasketdiv">
            <button className="addbasketbutton" onClick={handleAddBasket}>
              SEPETE EKLE
            </button>
          </div>

          <div className="model">
            <p>{details.stockCode}</p>
          </div>

          <div className="description1div">
            {details.description1.map((item, index) => {
              return (
                <p key={index} style={{ fontWeight: "600", marginTop: "1rem" }}>
                  {item}
                </p>
              );
            })}
          </div>

          <div className="description2">
            <ul>
              {details.description2.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const productId = context.params.productId;
  const details = await getProductById(productId);

  return {
    props: {
      details,
    },
  };
};

export default productDetailsPage;
