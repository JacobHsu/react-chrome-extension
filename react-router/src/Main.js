import React from 'react'
import { Redirect } from 'react-router';
import { useLocation } from "react-router-dom";


const Main = () => {
    
    let location = useLocation();
    console.log('main.js', location.pathname)

    if( location.pathname === "/List") {
        return <Redirect push to="/List" />;
    } else if (location.pathname === "/Welcome" ||
    location.pathname === "/" || location.pathname === "/index.html" ) {
        return <Redirect push to="/Welcome" />;
    } else {
        return (<div>{location.pathname}</div>)
    }

    //
    // return (
    //     <React.Fragment>
    //         
    //         <td>Main Then -> </td>
    //     </React.Fragment>
    // );
    //return (<div></div>)
}

export default Main