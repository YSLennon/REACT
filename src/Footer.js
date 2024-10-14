function Footer(props){
        let list = [];
        props.list.forEach(item => {
            list.push(<a href="javascript:;" onClick={() => alert(item)}><li key={item}>{item}</li></a>); 
        })
    return(
        <footer id="footer">
            
            <div>
                <ul>
                    {list}
                </ul>
            </div>
            
            footer

        </footer>
    )
}

export default Footer;