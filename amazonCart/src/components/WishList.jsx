import { useRecoilState, useRecoilValue } from "recoil";
import { wishListState } from "../store/wishListState";
import SideBar from "./SideBar";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { cartItemsState } from "../store/cartItemState";

function WishList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const wishItems = useRecoilValue(wishListState);
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  function handleOpenModal(product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const [addedProducts, setAddedProducts] = useState({});

  function addToCart(id) {
    if (addedProducts[id]) return;

    setAddedProducts((prev) => ({ ...prev, [id]: true }));
    const wishItem = wishItems.find((item) => item.id === id);

    const existingCartItem = cartItems.find((item) => item.id === id);

    if (existingCartItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...wishItem, quantity: 1 }]);
    }
  }

  return (
    <div className="main">
      <SideBar />
      <main>
        <div className="product-grid">
          {wishItems.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt="" className="product-img" />
              <h3 className="product-name">{product.name.substring(0, 21)}</h3>
              <p className="product-price">₹{product.price.toFixed(2)}</p>
              <button
                className="btn-addToCart"
                onClick={() => addToCart(product.id, 1)}
                disabled={!!addedProducts[product.id]}
              >
                {addedProducts[product.id] ? (
                  <span>
                    <a
                      href="/cart"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Proceed to Checkout{" "}
                    </a>
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </button>
              <button
                className="btn-quick-view"
                onClick={() => handleOpenModal(product)}
                aria-label={`Quick view ${product.name}`}
              >
                Quick View
              </button>
            </div>
          ))}
          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </div>
      </main>
    </div>
  );
}

export default WishList;
