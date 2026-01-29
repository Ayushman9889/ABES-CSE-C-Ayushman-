console.log("Aji sunte ho!!")
const parent = document.getElementById('container');
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2",{},"shuru kre react");
const li1 = React.createElement("li",{},"ye hai list1");
const li2 = React.createElement("li",{},"ye hai list2");

const ul = React.createElement("ul",{},[li1,li2]);
const div = React.createElement("div",{} ,[h2,ul]);
root.render(div);
