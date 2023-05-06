import './portfolio.scss'

export default function Portfolio(){
  return (
    <div className='portfolio' id='portfolio'>
      <div className='left'>
        <div className="imgContainer">
          <img src="assets/manpp.png" alt=""/>
        </div>
      </div>
      <div className='right'>
        <div className = 'wrapper'>
          <h2>Best</h2>
          <h1>courses.</h1>
        </div>
        <a href="#works">
          <img src="assets/ppppp.png" alt=""/>
        </a>
      </div>


    </div>
  )
}
