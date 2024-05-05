import React from "react";
import ReactDOM from "react-dom/client"

//React.createElement =>React Element => JS Object => HTML element(render)


//JSX (transpiled before it reaches JS ENGINE) -> PARCEL - Babel

//JSX =>
const jsxHeading  = <h1 className="head"> Namaste React using JSX 🚀🚀</h1>;
console.log(jsxHeading);

function Welcome(props){
    return <h1>Welcome to react Component , {props.name} {props.surname}</h1>;
}

const element = <Welcome name="Harsh" surname="Raj" />;


//A fucntional component
function Wpp(){
    return (
        <div>
            <Welcome name="Harsh" surname="Raj"/>
            <Welcome name="Akash" surname="Gupta"/>
            <Welcome name="Bassi" surname="Anubhav"/>
        </div>
    );
}
 
const element2 = <Wpp/>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element2);
