import React from 'react'
import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

function WhatsappIcon() {

    const date = new Date().toLocaleTimeString();

    return (
        <div>
            <WhatsAppWidget
                phoneNumber='919912162338'
                textReplyTime="Online"
                autoOpen={true}
                message={<>Hi there 👋 <br /><br /> How can I help you?</>
            }
            />
        </div>
    )
}

export default WhatsappIcon