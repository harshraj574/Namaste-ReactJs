import React from "react";
import ReactDOM from "react-dom/client"

<<<<<<< HEAD
//React.createElement =>React Element => JS Object => HTML element(render)


//JSX (transpiled before it reaches JS ENGINE) -> PARCEL - Babel

//JSX =>
const jsxHeading  = <h1 className="head"> Namaste React using JSX 🚀🚀</h1>;
console.log(jsxHeading);

function Welcome(props){
    return <h1>Welcome to react Component , {props.name} {props.surname}</h1>;
}

const element = <Welcome name="Harsh" surname="Raj" />;
=======
<div id ="parent">
<div id = "child">
    <h1>I'm h1 tag</h1>
    <h2>I'm a h2 tag</h2>
</div>
<div id="child2">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
</div>
</div>

*/
import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div",
    {id: "parent"},[
    React.createElement(
        "div",{id: "child"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"Ths is namaste React 🚀🚀")]
        ),
        React.createElement(
            "div",{id: "child2"},
            [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm a h2 tag")]
            ) 
    ]);
>>>>>>> 7ff19684936b09ae27a617b9d103f719f0874f10


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
