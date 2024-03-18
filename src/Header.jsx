import React from "react";

const Header = (props) =>{
    return (
        <div className="headerField" style={{position:"relative",top:0,background:"blue",width:"100%",height:"20vh;",color:"white",textAlign:"center"}}>
            {props.title}
        </div>
    );
}

Header.defaultProps = {
    'title':'To do List'
};

export default Header;