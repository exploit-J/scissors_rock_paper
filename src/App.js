/* eslint-disable */

import "./App.css";
import Box from "./components/box";
import { useState } from "react";

// 1. 박스 2개 (title, 사진, 결과)
// 2. 가위,바위,보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3, 4번 결과를 가지고 승패를 가른다.
// 6. 승패 결과에 따라 테두리 색이 변한다(승, 패, 비김)

const choice = {
  rock: {
    name: "Rock",
    img: "/assets/rock.png",
  },
  scissors: {
    name: "Scissors",
    img: "/assets/scissors.png",
  },
  paper: {
    name: "Paper",
    img: "/assets/paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgemnent(choice[userChoice], computerChoice));
  };

  const judgemnent = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };
  // 컴퓨터의 아이템 선택을 위해 choice변수의 key값을 배열로 가져옴(인덱스값 생성)
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const [userName, setUserName] = useState("Player");

  return (
    <div className="container">
      <div className="main-title">
        <h1>가위 바위 보 게임!</h1>
        <div className="input-area">
          <input
            className="input"
            type="text"
            placeholder="이름을 입력하세요"
            maxLength={5}
            onChange={(e) => {
              if (e.target.value == "") {
                setUserName("Player");
              } else if (e.target.value !== "") {
                setUserName(e.target.value);
              }
            }}
          ></input>
        </div>
      </div>
      <div className="main">
        <Box name={userName} item={userSelect} result={result} />
        <Box name={"Computer"} item={computerSelect} result={result} />
      </div>
      <div className="second">
        <div className="play-button" onClick={() => play("scissors")}>
          <img className="bottom-img" src="/assets/scissors.png" />
        </div>
        <div className="play-button" onClick={() => play("rock")}>
          <img className="bottom-img" src="/assets/rock.png" />
        </div>
        <div className="play-button" onClick={() => play("paper")}>
          <img className="bottom-img" src="/assets/paper.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
