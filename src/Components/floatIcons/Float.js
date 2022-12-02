import React from 'react'
import WhatsappIcon from './WhatsappIcon'

function Float() {
    return (
        <>
            <div className='float-whatsapp' >
                <WhatsappIcon />
            </div>

            <a href="#top">
                <button
                    className="scroltop icon-up"
                    type="button"
                    style={{ display: "inline-block" }}
                >
                    <i className="fa fa-arrow-up" />
                </button>
            </a>
        </>
    )
}

export default Float