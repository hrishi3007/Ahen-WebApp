import React, { useState } from 'react';
// import { loadScript } from '@razorpay/payments';

function PaymentForm() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      const options = {
        key: 'rzp_test_tkjSoJvjUoYpVx', // Replace with your Razorpay API key
        amount: 50000, // The amount is in paise = INR 500
        currency: 'INR',
        name: 'AHEN',
        description: 'Test Payment',
        image: 'https://yourcompany.com/logo.png', // Replace with your company logo URL
        handler: function (response) {
          alert(response.razorpay_payment_id);
          setPaymentSuccess(true);
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  return (
    <div>
      {!paymentSuccess ? (
        <button 
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handlePayment}>Pay Now</button>
      ) : (
        <p>Payment Successful!</p>
      )}
    </div>
  );
}

export default PaymentForm;
