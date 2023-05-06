import './intro.scss'
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro(){
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Maths", "Science", "English"]
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="imgContainer">
          <img src="assets/imag1.png" alt=""/>
        </div>
      </div>
      <div className='right'>
        <div className = 'wrapper'>
          <h2>Start learning</h2>
          <h1>Today!</h1>
          <h3>
          and become a <span ref={textRef}></span> expert.
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/ppppp.png" alt=""/>
        </a>
      </div>


    </div>
  )
}
