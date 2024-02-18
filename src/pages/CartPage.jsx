import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_IMG_CDN } from "../utils/constants";
import "../App.css";
import { clearCart } from "../utils/cartSlice";
import PayPalButton from "../utils/PayPalButton";
import PaymentSuccess from "../components/PaymentSuccess";

import CartItem from "../components/CartItem";
import { useState } from "react";
import EmptyCart from "../components/EmptyCart";
import { toast } from "react-hot-toast";

const CartPage = () => {
  
 


  let cartItems = useSelector((store) => store.cart.items);


  const [paymentDetails, setPaymentDetails] = useState(null);

  // Callback function to handle redirection to the success page
  const handleSuccess = (details) => {
    setPaymentDetails(details);
    dispatch(clearCart());
    // Redirect to the success page or perform any other desired action
  };



  function groupAndCountById(items) {
    let groupedItems = {};

    items.forEach((item) => {
      const id = item.id;
      if (groupedItems[id]) {
        groupedItems[id].count++;
      } else {
        groupedItems[id] = { ...item, count: 1 };
      }
    });

    // Convert the grouped object back to an array
    const result = Object.values(groupedItems);

    return result;
  }

  cartItems = groupAndCountById(cartItems);

  const gstPrice = 10;
  const deliveryCharge = 5;

  const calculateGrandTotal = () => {
    return cartItems.reduce(
      (total, item) => total + ((item?.price|| item?.finalPrice|| item?.defaultPrice) / 100) * item.quantity,
      0
    );
  };

  const grandTotal = calculateGrandTotal();

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error(" All Items are Removed");
  };



 
  return paymentDetails?.status === "COMPLETED" ? (
    <PaymentSuccess paymentDetails={paymentDetails} />
  ) : cartItems.length === 0 ? (
    
    <EmptyCart/>
  ) : (
    <div className="cart-page relative h-full"> 
      <div className="left-block">
        <div className="flex justify-center items-center">
        <button className="uppercase bg-blue-600 hover:bg-purple-50 rounded-lg text-white transition
         duration-300 ease-linear mt-5 border-2 border-blue-600 font-semibold hover:text-green-700 
         p-3 px-10 tracking-wider" onClick={handleClearCart}>
          Clear Cart
        </button>

        </div>
        
        <table className="cart-items">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="cart-item">
                <td>
                  <img
                    src={`${RESTAURANT_IMG_CDN }${item.imageId}`}
                    alt={item.name}
                    className="item-image"
                  />
                </td>
                <td className="text-2rem font-bold ">{item.name}</td>
                 
                
                 <td>
                {/* {cartItems.map((item) => (
                  <CartItem item={item} key={cartItems?.id} />
                ))} */}
                <CartItem item={item} />
                  </td>
                <td>
                ₹
                  {(item.price / 100 ||
                    item.finalPrice / 100 ||
                    item.defaultPrice / 100)*item.quantity} 
                </td>
                <td>
                ₹
                  {(item.price / 100 ||
                    item.finalPrice / 100 ||
                    item.defaultPrice / 100) *item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="order-summary">
          <p className="total-price">
            <span>Total Price:</span> <span>₹{grandTotal}</span>
          </p>
          <p className="gst-price">
            <span>GST:</span> <span>₹{gstPrice}</span>
          </p>
          <p className="delivery-charge">
            <span>Delivery Charge:</span> <span>₹{deliveryCharge}</span>
          </p>
          <p className="grand-total">
            <span>Grand Total:</span>{" "}
            <span>₹{grandTotal + gstPrice + deliveryCharge}</span>
          </p>
          <br />
          {/* Render PayPalButton only if paymentDetails is not available */}
           {!paymentDetails && (
            <PayPalButton totalAmount={grandTotal + gstPrice + deliveryCharge} onSuccess={handleSuccess} />
          )}  
          
          
        </div>
      </div>
    </div>
  );
};

export default CartPage;

// {items.map((item) => (
//   <CartItem item={item} key={item?.id} />
// ))}