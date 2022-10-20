class FirstCont extends React.Component{
    render(){
        return(
            <div>Hello! Welcome to My home page
                <div><h1>I am Neeraj Kushwaha</h1></div>
            </div>)
    };
}

const container = document.getElementById("root");
ReactDOM.render(<FirstCont/>,container);