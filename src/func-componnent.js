import react from "react";
export function Header() {
    const astyle = {
        display: "inline-block",
        color: "blue",
        margin: "7px",
        textDecoration: "none",
    };
    return (
        <div style= {{backgroundColor: '#ccc'}}>
            <a href="" style={astyle}>Home</a> |&nbsp;
            <a href="" style={astyle}>React</a> |&nbsp;
            <a href="" style={astyle}>React Native</a>   
        </div>
    );
}

export const Content = () => {
    return (
        <div style= {{textAlign: 'center',}}>
            <h2>Hello<br/>React & React Native</h2>
            <br/><br/>
        </div>
    );
}

export const Footer = () => {
    return (
        <div style= {{textAlign: 'center',}}>
            &copy; {new Date().getFullYear()} All rights reserved 
        </div>
    );
}