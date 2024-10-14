function Header(props){
    props.printText();
    return (
        <header id="header">
            header
            <div>
                <a href="javascript:;" onClick={props.printText}>
                    {props.title}
                </a>
            </div>
            <div>
                {props.hey}
            </div>
            <div>
                10 + 15 = {props.func(10 , 15)}
            </div>
            
        </header>
    );
}

export default Header;