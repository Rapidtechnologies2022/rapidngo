import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrumb({mainTitle,title,text,img}) {
    return (
        <div className="dlab-bnr-inr overlay-black-middle" style={{ "backgroundImage": `url(${img})` }}>
            <div className="container">
                <div className="dlab-bnr-inr-entry">
                    <h1> {mainTitle} </h1>
                    {/* <!-- Breadcrumb Row --> */}
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/"><a> {title} </a></Link></li>
                            <li className="breadcrumb-item active" aria-current="page"> {text} </li>
                        </ul>
                    </nav>
                    {/* <!-- Breadcrumb Row End --> */}
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb