import React from "react"
import { Helmet } from "react-helmet"

const RedirectPage = () => {

    return(
        <Helmet>
            <meta
                http-equiv="refresh"
                content={`0; URL='/home/'`}
            />
        </Helmet>
    )
}

export default RedirectPage;
