import React from 'react'
export default function Breadcrumb({image,title, content}) {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol  className="breadcrumb bread_row_bg" style={{backgroundImage: `url(${image})`}}>
                    <li className="breadcrumb-item "><a className="breadcrumb-list" href="#"> {title} </a>  </li>
                    <li className="breadcrumb-divider" > {`>`} </li>
                    <li className="breadcrumb-item active breadcrumb-list" aria-current="page">  {content} </li>
                </ol>
            </nav>
        </div>
    )
}
