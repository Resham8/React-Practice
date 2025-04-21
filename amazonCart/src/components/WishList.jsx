import { useRecoilState, useRecoilValue } from "recoil";
import { wishListState } from "../store/wishListState";
import SideBar from "./SideBar";

function WishList() {
  const wishItem = useRecoilValue(wishListState);
  return (
    <div className="main">
      <SideBar />
      <main>
        <div className="product-grid">
          {wishItem.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt="" className="product-img" />
              <h3 className="product-name">{product.name.substring(0, 21)}</h3>
              <p className="product-price">₹{product.price.toFixed(2)}</p>
              <button className="btn-addToCart">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default WishList;
