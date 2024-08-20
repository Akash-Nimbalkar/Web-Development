import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import React from 'react';
import ReactDOM from 'react-dom';


// function MyApp(){
//     return (
//         <div>
//             <h2>Custom App!</h2>
//         </div>
//     )
// }

// const anotherElement = (
//     <a href='https://google.com'  target='_blank'>Visit Google</a>
// )

const anotherUser = "User1"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target: '_blank'},
    'Visit Google Now',
    anotherUser
)
    


createRoot(document.getElementById("root"))
.render(
   reactElement
);
