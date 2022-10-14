import React, {useState, useEffect} from "react";
import datas from "./components/cards";
import BusinessCard from "./components/RandomCard";

// 추첨하기 버튼과 명함 컴포넌트 구현
// 추첨하기 버튼을 누르면, 랜덤하게 하나의 명함을 만든다.
function App() {
  const [cards, setCards] = useState([]); // const cards = []; 와 같다.
  const [picked, setPicked] = useState([]);

  useEffect(() => {
    setCards(datas); // setCards를 통해 빈배열에 데이터들을 불러온다. 
    // console.log(cards);
  }, []);

  // 하나의 명함 고르기
  function draw() {
    if (picked.length > 2) {
      const names = picked.reduce((acc, cur) => {
        return acc = acc.concat(`${cur.name}, `);
      }, "");
     
      return alert(`당첨자는 ${names} 입니다.`);
    }

    const randomIdx = Math.floor(Math.random() * cards.length);
    // randomItem은 배열이다 같은 값을 가리키고있는 것. 
    const randomItem = cards[randomIdx]; //randomItem은 cards[randomIdx]의 주소를 가리킴.
    console.log(randomItem === cards[randomIdx]);

    // cards에 있는 요소를 randomItem과 중복되는것은 제거해서 다시 setState하기 
    setCards(cards.filter(c => c.phoneNumber !== randomItem.phoneNumber));

    // 당첨자(array) 관리 별도의 데이터 저장.
    setPicked([...picked, randomItem]);
    
  }
  
  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {/* {picked.length > 0 && <BusinessCard info={picked[picked.length - 1]}/>} */}
      {/* 맵활용하기 */}
      {picked.length > 0 && picked.map((v) => <BusinessCard info = {v}/>)}
    </div>
  );
}

export default App;
