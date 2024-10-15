import { useState } from "react";

function App(){
    const [menu, setMenu] = useState(0);
    // const [menuList, setMenuList] = useState([])
    let menuList = (menu === 1)?['1','1']:['2','2']
    let menuListLi = []
    changeMenu();
    function changeMenu(){
        menuListLi = [];
        menuList.forEach(item => {
            menuListLi.push(<li>{item}</li>)
        })
    }
    return (
        <>
            <button onClick={()=>{
                setMenu(1);
                changeMenu();
            }}>1번메뉴</button>
            <button onClick={()=>{
                setMenu(2);
                changeMenu();
            }}>2번메뉴</button>
            <div>{menuListLi}</div>

        </>
    )
}

export default App; 