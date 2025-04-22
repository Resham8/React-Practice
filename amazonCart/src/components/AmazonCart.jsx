import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import PurchaseModal from "./PurchaseModal";
import { cartItemsState } from "../store/cartItemState";
import { cartTotalSelector } from "../store/cartTotalSelector";

function AmazonCart() {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { total, itemCount } = useRecoilValue(cartTotalSelector);

  function updateQuantity(id, change){
    setCartItems(prevItems => 
        prevItems.map(item => item.id === id ? {...item, quantity: Math.max(1, item.quantity + change)} : item)
    );
  }

  function removeItem(id){
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handlePurchaseComplete = () => {
    setIsModalOpen(false);
    setCartItems([]);
  };

  return (
    <div>
      <main className="cart-main">
        <div className="cart-summary">
          <h2 className="cart-heading">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} className="item-img" />
                  <div style={{ flexGrow: 1 }}>
                    <h3>{item.name.substring(0, 18)}</h3>
                    <p style={{ color: "#48bb78" }}>In stock</p>
                    <div className="quantity-control">
                      <button className="minus-btn" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button className="plus-btn" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus size={16} />
                      </button>
                      <button className="delete-btn" onClick={() => removeItem(item.id)}>Delete</button>
                    </div>
                  </div>
                  <div>
                    <p>₹{item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-summary">
          <h3 className="cart-heading">
            <div className="total-summary">
              <span>Items ({itemCount}):</span>
              <span>₹{total}</span>
            </div>
            <div className="total-summary">
              <span>Order Total:</span>
              <span>₹{total}</span>
            </div>
            <button className="buy-btn" disabled={cartItems.length === 0} onClick={handleCheckout}>
              Proceed to Buy
            </button>
          </h3>
        </div>
      </main>
      {isModalOpen && (
        <PurchaseModal
          handlePurchaseComplete={handlePurchaseComplete}
          total={total}
        />
      )}
    </div>
  );
}

export default AmazonCart;
