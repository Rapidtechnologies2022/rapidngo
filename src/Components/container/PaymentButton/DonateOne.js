import React from 'react'

function DonateOne() {
    return (
        <div className='container mt-5 mb-2' >
            <div className="section-head style-3 text-center">
                <h2 className="title">UPI<span className="text-primary"> Payments</span></h2>
                {/*  <h2 className="title">Make Online Donation</h2> */}
                <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className='row' >
                <div className='col-lg-6 col-xs-12' >
                    <img src='/images/payment/payment.jpeg' alt='..Loading' />
                </div>
                <div className='col-lg-6 col-xs-12' >
                    <div>
                        <h5> Making a donation is the ultimate sign of solidarity.</h5>
                    </div>
                    <div>
                        <h2> Scan QR Code for </h2>
                        <h2> All UPI Payments  </h2>
                        <h5>  Google Pay </h5>
                        <h5>  Phone Pay </h5>
                        <h5>  Paytm </h5>
                        <h5>  Bhim Upi </h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DonateOne