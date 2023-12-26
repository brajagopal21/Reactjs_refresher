import { useState } from "react";
import "./styles.css";
function App() {
  let [counter, setCounter] = useState(0);
  // const addValue = () => {
  //   setCounter(prev=> prev + 1);
  // }
  // const removeValue = () => {
  //   setCounter(prev=> prev - 1);
  // }
  return (
    <>
      <div>{counter} likes</div>
      <span onClick={() => setCounter(prev=> prev + 1)}>👍🏽</span>
      <span onClick={() => setCounter(prev=> prev - 1)}>👎🏽</span>
      <h3>Like or dislike to increase/decrease</h3>
    </>
  )
}

export default App
