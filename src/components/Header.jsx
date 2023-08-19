import React from "react";
// import { useState } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header(){

    // const [mode, setMode] = useState("off");

    return (
        <header >
            <h1><HighlightIcon />Keeper</h1>
            {/* <div style={{display: "flex" , flex:"column"}} className="form-check form-switch">
                <input onClick={(event)=>{
                    console.log(event.target.value);
                }} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark mode</label>
            </div> */}
        </header>
    );
}

export default Header;