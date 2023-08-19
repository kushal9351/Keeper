import React from "react";

function Footer(){
    const date = new Date();
    const currYear = date.getFullYear();

    return (
        <footer>
           <p> Copyright &copy; {currYear}</p>
        </footer>
    );
}

export default Footer;