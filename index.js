import React from "react";
import ReactDOM from "react-dom/client";

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));


const Main=()=>
{
    return(
        <div>
            <h1>HELLO WORLD using react</h1>
        
        </div>
    );
}
reactRoot.render(<Main/>);