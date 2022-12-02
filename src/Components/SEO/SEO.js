import PropTypes from "prop-types";
import React from 'react';
import {Helmet} from "react-helmet";

const SEO = ({title}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Rapid Technologies – Software Developement - Mobile App - Digital Marketing Company" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="keywords" content="Web Developement, Mobile App Development, Digital MArketing, Consulting Services" />
            <link rel="website" href="http://www.rapidtech.com" />
        </Helmet>
    )
}

SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;
