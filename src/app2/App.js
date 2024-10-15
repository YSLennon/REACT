import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App(){
    var list = ["자바", "오라클", "html"];

    return(
        <div>
            <Header text="Web Header!" />
            <Body list={list} printSubject={(subject) => alert(subject)} />
            <Footer text="WebFooter!" />
        </div>
    )
}

export default App;