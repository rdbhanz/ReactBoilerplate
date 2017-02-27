//jsx code- javascript xml
var React = require('react'); //since we removed the scripts tags,
var ReactDOM = require('react-dom'); //global variable no-longer exists and need to include them via webpack



ReactDOM.render(
    <h1>Boilerplate app !</h1>,
    document.getElementById('app')
  );
