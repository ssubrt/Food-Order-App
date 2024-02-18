import React from "react";
import { Link } from "react-router-dom";
import "../App.css";






const PaymentSuccess = ({ paymentDetails }) => {
  console.log(paymentDetails)
  return (
    <div className="payment-container mt-16 ">
      <div className="content shadow-lg shadow-black">
        <i className="fa fa-check-circle icon" aria-hidden="true"></i>
        <h3 className="heading">Payment Successful!</h3>
        <p className="text">
          Thank you for your order. Order will deliver shortly.
        </p>

        <p className="order-details">Payment ID: {paymentDetails ? paymentDetails.id: ''}</p>
        <p className="order-details">
          Payer ID: {paymentDetails ? paymentDetails.payer.payer_id: ''}
        </p>
        <p className="order-details">
          Total Amount: ₹{paymentDetails ? paymentDetails.purchase_units[0].amount.value: ''}
        </p>
        <p className="order-details">Payment Status: {paymentDetails ? paymentDetails.status: ''}</p>
        <div className="button">
          <Link to={"/"} >
          <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
  
    </div>
  );
};

export default PaymentSuccess;