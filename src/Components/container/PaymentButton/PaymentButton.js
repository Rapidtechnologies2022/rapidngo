import React, { useEffect } from 'react'
import { useState } from 'react';

function PaymentButton() {
<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KpN9JvqMOxwDeg" async> </script> </form>
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


    // const openCheckOut = () => {

    //     const options = {
    //         "key": "rzp_test_DV7J8HlGmykXQL", // Enter the Key ID generated from the Dashboard
    //         "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //         "currency": "INR",
    //         "name": "Veni",
    //         "description": "Test Transaction",
    //         "image": "/images/veniLogo.PNG",
    //         // "order_id": response.razorpay_order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //         "handler": function (response) {
    //             alert(response.razorpay_payment_id);
    //             alert(response.razorpay_order_id);
    //             alert(response.razorpay_signature)
    //         },
    //         "prefill": {
    //             "name": "Gaurav Kumar",
    //             "email": "gaurav.kumar@example.com",
    //             "contact": "9999999999"
    //         },
    //         "notes": {
    //             "address": "Razorpay Corporate Office"
    //         },
    //         "theme": {
    //             "color": "#3399cc"
    //         }
    //     }
    //     var rzp1 = new window.Razorpay(options);
    //     rzp1.open();
    //     rzp1.on('payment.failed', function (response) {
    //         alert(response.error.code);
    //         alert(response.error.description);
    //         alert(response.error.source);
    //         alert(response.error.step);
    //         alert(response.error.reason);
    //         alert(response.error.metadata.order_id);
    //         alert(response.error.metadata.payment_id);
    //     });

    // }



    // document.getElementById('rzp-button1').onclick = function (e) {

    //     e.preventDefault();
    // }

    return (
        <div className='container'>
            <div className='mt-3' >
                <form id="rzp_payment_form"></form>
            </div>
        </div>
    )
}

export default PaymentButton