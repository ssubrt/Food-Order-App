import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PaymentSuccess from "../components/PaymentSuccess";




const PayPalButton = ({ totalAmount, onSuccess }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      setPaymentDetails(details);
      
      if (details.status === "COMPLETED") {
        // Call the onSuccess callback to handle redirection
        onSuccess(details);
        <PaymentSuccess/>
      }
    });
  };


  

  return (
    <div>
      <PayPalScriptProvider
       options={{ "client-id": "AZRimq2CpfwpOUifCkn3CUpj0p4oGGY7qimIHAlP7cH1Rs7B_S022yon5C05uzvIKdvhi9mXwuWKbnmj" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmount, // Set the total amount from your cart
                  },
                },
              ],
            });
          }}
          onApprove={handleApprove}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalButton;