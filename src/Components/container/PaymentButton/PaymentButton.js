import React, { useEffect } from 'react'
import { useState } from 'react';

function PaymentButton() {
    function donateForm() {
        const Script = document.createElement("script");
        const Form = document.getElementById('donateForm');
        Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id', 'pl_JCT4CahJhmgSkr')
        Script.setAttribute('data-button_theme', 'razerpay-dark')
        Form.appendChild(Script);
    }
    useEffect(() => {
        donateForm();
    }, [])

    return (
        <div className='container'>
            <div>
                <div className='mt-3' >
                    <form id='donateForm'></form>
                </div>
            </div>
        </div>
    )
}

export default PaymentButton