import Header from './Header';
import Footer from './Footer';

// 하나의 태그만 들어갈 수 있음( 공백 태그도 허용됨 )
function App() {
  // let list = [
  //   <li>kotlin</li>,
  //   <li>javascript</li>,
  //   <li>oracle</li>,
  //   <li>react</li>,
  // ]
  // let list2 = [
  //   <li>코틀린</li>,
  //   <li>자바스크립트</li>,
  //   <li>리액트</li>,
  //   <li>오라클</li>,
  // ]
  let list3 = [ "자바", "오라클", "머시기" ]
  function sum(x, y){
    return x + y;
  }
  return (
    <div>
      <Header title="hello" hey="what's up" func={sum} printText={() => {
        console.log('함수 보내기 테스트');
      }}/>
      {/* <Header title="hello" hey="what's up" func={sum} printText={() => {
        alert('함수 보내기 테스트2');
      }}/> */}
      <main id="main">
        React is Funny
        <ul>
          {/* {list[0]}
          {list}
          {list2} */}
        </ul>
      </main>
      <Footer list={list3} />
    </div>
  );
}

export default App;
