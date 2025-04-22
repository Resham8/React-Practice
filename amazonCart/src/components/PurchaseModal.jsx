import { CheckCircle } from "lucide-react";

function PurchaseModal({ handlePurchaseComplete, total }) {
  return (
    <div className="purchase-modal">
      <div className="purchase-modal-content">
        <h2>Purchase Successful!</h2>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <CheckCircle
            size={48}
            style={{ margin: "0 auto", color: "#48bb78" }}
          />
          <p>
            Thank you for your purchase. Your order has been successfully
            processed.
          </p>
        </div>
        <p>Total Amount: ₹{total}</p>
        <button className="btn-close" onClick={handlePurchaseComplete}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PurchaseModal;
