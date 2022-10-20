const Container = () =>{
    return React.createElement(`div`,null,`Hey there! Welcome to my home page`,React.createElement('h1',null,'I am Neeraj Kushwaha'),React.createElement(`p`,null,`Hi I am learning React and implementing things using react`));
}

const container = document.getElementById("root");
ReactDOM.render(React.createElement(Container),container);