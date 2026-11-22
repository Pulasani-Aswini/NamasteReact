import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React Element (Js- Object) => HTML(DOM)
const heading= React.createElement("h1",{id:"heading",key:"h1"},"Namaste React !!"); //(this is very clumsy way to create react element and it is not readable and not maintainable so we use JSX to create react element in a better way)

//ReactDom is responsible to create root and render the react element inside the root and to dsiplay in the browser /to render we use ReactDom
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //it will overirde the content of the root div in index.html file and display the react element heading in the browser

//JSx -Its a HTML like syntax but its not HTML and Its never be HTML inside javascript, its a syntactic sugar for React.createElement() and it is more readable and maintainable than React.createElement() and it is used to create react element in a better way
const jsxHeading=<h1 className="head">Namaste Aswini using jSX</h1>;
//Js engine can't understand JSX and its not a valid javascript.javaEngine only understands ECMAScript.parcel is doing job here . JSX will be tranpiled before it reches to the jS engine. tranpiled means conversion of JSX to React.createElement() and then React.createElement() will be converted to React Element and then React Element will be converted to HTML(DOM) and then it will be displayed in the browser.
//Parcel is like a manager and it use babel(javascript compiler).so babel will transpile our code.
/*
For attributes in JSX we use camelCase instead of HTML attributes. For example, class in HTML is className in JSX, for onclick in HTML is onClick in JSX and so on.
*/
root.render(jsxHeading); //it will overirde the content of the root div in index.html file and display the react element jsxHeading in the browser
/*
babel is a champ its not only transpiles the code but also it convertscode such that older browsers can render it
*/
const jsxmulttipleLines=(
    <h1>for Multiple lines we should use brackets mandatorily
        .but if we have single line not required to use brackets.
    </h1>
);

/*React Component
2 types
1. class based component
          Its a old way of writing react component and it is not recommended to use class based component now a days because it is not readable and maintainable and it is more complex than functional component. so we use functional component now a days.
2. functional component
           Its just a normal javascript function which returns react element and it is more readable and maintainable than class based component and it is more simple than class based component. so we use functional component now a days.

*/
//functional component and name should start with capital letter and it should return react element 
// //This is nothing but component composition when component is used inside another component. It is a way to reuse the component.
const HeadingComponent=()=>{
    return (
    <div>
        <Title/> 
       
     <h1>Namaste Aswini using Functional Component
        
    </h1>
    </div>)
}
//If its a single line return we can use arrow function and we can remove the return keyword and we can remove the brackets and we can write it in a single line
const HeadingComponent1=()=> <h1>Namaste Aswini using Functional Component in single line</h1>
root.render(<HeadingComponent/>);

const Title=()=>{
   return<h1>Namaste Aswini nested Title comonent</h1>
}
const elem=<span>I am a react element</span>
const reactObj=(
    <div>hi dear I am just javscript object and can be used anywhere
        {elem} 
    </div>
);
/*
whatever written inside {} . babel will sanitize the code and save you from cross site scripting attack. 
*/
const HeadingCompoent2=()=>(
    <div id="container">
        <h2>{100+200}</h2>
        <h1>between brackets we can use any expression</h1>
        {reactObj}
    </div>
);
root.render(<HeadingCompoent2/>);