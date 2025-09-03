imp;
const heading = React.createElement("h1", {
    id: "title",
    className: "ti"
}, "Name");
const content = React.createElement("p", {}, "Yashaswini");
const div = React.createElement("div", {
    id: "container"
}, [
    heading,
    content
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

//# sourceMappingURL=namasteReact.6bd02f5a.js.map
