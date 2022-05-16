import Link from "next/link";
import {MdShoppingCart} from "react-icons/md"

const Navbar = () => {
  return (
    <div className = "navbar">
        <Link href = "/">
            <h3 className = "Link">Products</h3>
        </Link>

        <Link href = "/Basket" className = "Link">
            <MdShoppingCart style={{color : "white", fontSize : "3rem", cursor : "pointer"}}/>
        </Link>
    </div>
  )
}

export default Navbar