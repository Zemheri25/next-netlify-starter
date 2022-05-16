import ProductData from "../assets/myProducts"

export const getAllProducts = async () =>{
    return ProductData
};

export const getProductById = async (productId) => {
    return ProductData.find(product =>product.id === productId)
}