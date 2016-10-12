var React = require("react");
var ReactDOM = require("react-dom");
var SchoolsList = require("./components/SchoolList.jsx");

var schools = [{name:"Lovedale",tagline:"this is a wonderful school"},
                {name:"Bishop",tagline:"Another great school"}];
                

ReactDOM.render(<SchoolsList schools={schools} />, document.getElementById("container"));    
