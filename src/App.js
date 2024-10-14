import Header from './Header';
import Footer from './Footer';

// 하나의 태그만 들어갈 수 있음( 공백 태그도 허용됨 )
function App() {
  let list = [
    <li>kotlin</li>,
    <li>javascript</li>,
    <li>oracle</li>,
    <li>react</li>,
  ]
  let flg = true;
  if(flg){
    list = [
      <li>kotlin</li>,
      <li>javascript</li>,
      <li>oracle</li>,
      <li>react</li>,
    ]
  }
  return (
    <div>
      <Header title="hello" hey="what's up"/>
      <main id="main">
        React is Funny
        <ul>
          {list[0]}
          {list}
        </ul>
      </main>
      <Footer list={list} />
    </div>
  );
}

export default App;
