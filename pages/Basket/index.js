import Layout from "../../components/Layout";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import {AiFillDelete} from "react-icons/ai";
import { useState } from "react";
import { tooltipClasses } from "@mui/material";
import { useEffect } from "react";



const Basket = () => {
  
  const {list, handleDelete, total, setTotal} = useContext(ProductContext);
  let kdv = total*0.18
  



  return (
    <Layout>
      <div className="basketmain">
        <h1 style={{ textAlign: "center" }}>Basket Page</h1>
        <div className="maincontent">
          <div className="theleftside">
            {list.map((item, index) => {
              return <div className="selectedproductdiv" key={index} >
                <div className="selectedproductimagediv">
                  <img src={item.images[0]} alt={item.name} style = {{width : "90%"}}/>
                </div>

                <div className="selectedproductinfdiv" style={{gap : "10px"}}>
                  <h4 style={{textAlign:"center"}}>{item.name}</h4>
                  <p>Tahmini Kargoya Teslim Süresi 4 gün</p>
                  <h5>₺{item.price}.00</h5>
                  <button onClick={() => {setTotal(total - item.salePrice); handleDelete(item.id)}}><AiFillDelete style={{fontSize : "2rem", border : "none", cursor : "pointer"}}/></button>

                </div>
              </div>;
            })}
          </div>

          <div className="therightside">
            <h1 style={{textAlign : "center"}}>Total Amount</h1>
            <h3>Products Number : {list.length}</h3>
            <h3>Products Cost :₺{total}.00</h3>
            <h3>KDV 18% :₺ {kdv}</h3>
            <h3>Total : ₺{(total + kdv).toFixed(2)}</h3>
            <button className="paymentbutton">Payment</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Basket;


