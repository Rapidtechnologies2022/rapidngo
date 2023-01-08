import React, { useEffect } from 'react'
import { useState } from 'react';

function PaymentButton() {
    {/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KpN9JvqMOxwDeg" async> </script> </form> */ }
    useEffect(() => {
        const rzpPaymentForm = document.getElementById("rzp_payment_form");

        if (!rzpPaymentForm.hasChildNodes()) {

            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.async = true;
            script.dataset.payment_button_id = "pl_KpN9JvqMOxwDeg";
            rzpPaymentForm.appendChild(script);

        }

    });

    return (
        <div className='container'>
            <div className='mt-3' >
                <form id="rzp_payment_form"></form>
            </div>
        </div>
    )
}

export default PaymentButton