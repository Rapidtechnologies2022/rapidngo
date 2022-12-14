import React from 'react'
import PaymentButton from './PaymentButton'

function DonateTwo() {
    return (
        <div className='container mt-3 mb-3' >
            <div className="section-head style-3 text-center">
                <h2 className="title">Make Online<span className="text-primary"> Donation</span></h2>
                {/*  <h2 className="title">Make Online Donation</h2> */}
                <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className='row' >
                <div className='col-lg-6 col-xs-12' >
                    <img src='/images/volunteer/volunteers-food.jpg' alt='..Loading' />
                </div>
                <div className='col-lg-6 col-xs-12' >
                    <div>
                        <h2> Bank Account Details </h2>
                        <h5> <b>Bank Name:</b> State Bank of India </h5>
                        <h5> <b>Name:</b> Veni Foundation </h5>
                        <h5> <b>Ac No:</b> 402545685785 </h5>
                        <h5> <b>IFSC Code:</b> SBIN006045 </h5>
                    </div>
                    <div>
                        <h2> Donate Online </h2>
                        {/* <h5> Making a donation is the ultimate sign of solidarity.</h5> */}
                        <><PaymentButton /> </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateTwo