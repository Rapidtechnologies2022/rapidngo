import React from 'react'
import PaymentButton from './PaymentButton'

function DonateOne() {
    return (
        <div className='container mt-3 mb-3' >
            <div className="section-head style-3 text-center">
                <h2 className="title">Make Online Donation</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className='row' >
                <div className='col' >
                    <div className='flex' >
                        <h2> Bank Account Details </h2>
                        <h5> <b>Bank Name:</b> State Bank of India </h5>
                        <h5> <b>Name:</b> Veni Foundation </h5>
                        <h5> <b>Ac No:</b> 402545685785 </h5>
                        <h5> <b>IFSC Code:</b> SBIN006045 </h5>
                    </div>
                    {/* c */}
                </div>
                <div className='col flex' >
                    <h2> Donate Online </h2>
                    <h5> Making a donation is the ultimate sign of solidarity.</h5>
                    <><PaymentButton /> </>
                </div>
            </div>
        </div>
    )
}

export default DonateOne