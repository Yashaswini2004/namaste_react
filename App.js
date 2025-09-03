import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createElement("h1",{id:"title",className:"ti",key:"heading"},"Name")
        const content=React.createElement("p",{key:"content"},"Yashaswini C")
        const div=React.createElement("div",{id:"container"},[heading,content]);
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(div)