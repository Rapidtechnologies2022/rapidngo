import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SuccessPage() {

    const history = useNavigate();

    useMemo(() => {
        setTimeout(() => {
            history("/");
        }, 25000)
    })

    return (
        <div className='container' >
            <div className='row success_page' >
                <div className='col  ' >
                    <img className='lottie_img' src="/images/sucess/success.gif" alt='' />
                    <h3 className='mb-5 success_text'> Your Form Submitted SuccessFully ! </h3>
                    <Link to="/" className="success_link" >Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage