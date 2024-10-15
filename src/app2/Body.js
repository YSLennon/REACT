

function Body(props){
    let list = [];
    props.list.forEach(item => {
        list.push(<a href="javascript:;" onClick={() => props.printSubject(item)}><li>{item}</li></a>);
    });
    return(
        <body>
            {list}
        </body>
    )
}

export default Body;