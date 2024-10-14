function Header(props){
    return (
        <header id="header">
            header
            <div>
                {props.title}
            </div>
            <div>
                {props.hey}
            </div>
            
        </header>
    );
}

export default Header;