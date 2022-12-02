import React from 'react'
import ClientSlider from './ClientSlider'

function Client() {
    return (
        <>
            <div className="content-inner-2 mt-3">
                <div className="container">
                    <div className="clients-carousel owl-none owl-carousel owl-loaded owl-drag">
                        <ClientSlider />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Client