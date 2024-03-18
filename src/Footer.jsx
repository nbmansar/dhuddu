import React from "react";

const Footer = (props) =>{
    return (
        <div className="FooterField" style={{position:"fixed",bottom:0,background:"blue",width:"100%",height:"20vh;",color:"white",textAlign:"center"}}>
            {props.length} List of {props.length === 1 ? "item":"items"}
        </div>
    );
}

export default Footer;