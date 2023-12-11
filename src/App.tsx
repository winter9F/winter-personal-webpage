import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <div className='container card mt-5 '>
        <div className="row justify-content-center">

          <div className='now1 col-8 p-5'>
            <h1>Winter Faye</h1>
            <h6>Software Engineer</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis modi. Dolores inventore repudiandae neque facere harum explicabo, ratione, impedit dignissimos dolorem assumenda, quibusdam veritatis doloribus fugit id officia commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore molestiae sed quis blanditiis ipsam illo perferendis similique commodi sunt, aliquam fugiat. Quia sint neque labore voluptatem at! Enim, blanditiis.</p>
            <div>
              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/HTML5_logo_i7agog.png" className="logoHtml" alt="" />


              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/CSS3_logo_oxemt8.png" className="logoCss" alt="" />


              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/JavaScript_logo_rseodv.png" className="logoJs" alt="" />

              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702152146/Language%20Icons/Typescript_logo_wxdlan.png" className="logoTs" alt="" />
            </div>

          </div>
          <div className='now2 col ps-5'>
            <div>
              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1698336656/No_user_image_l3xbpn.jpg" alt="" />
            </div>
            <div className='pt-3'>
              <h5>Skills</h5>
              <ul>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim repudiandae soluta ratione. Quo incidunt dignissimos tempora minus modi, fugit vero ducimus suscipit quasi dolorum aliquid similique a reiciendis illum?
              </ul>
            </div>
          </div>



          <div className='col text-end p-2'>
            <a href="https://react.dev/" target="_blank">
              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/React_Logo_lkaxbz.png" className="logoReact" alt="" />
            </a>
          </div>
          <div className='col text-center p-2'>
            <a href="https://nodejs.org/en" target="_blank">
              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/Nodejs_logo_l18ovx.png" className="logoNode" alt="" />
            </a>
          </div>
          <div className='col text-start p-2'>
            <a href="https://www.mongodb.com/" target="_blank">
              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/MongoDB_logo_mkiymt.png" className="logoMongo" alt="" />
            </a>
          </div>


          <div className="card">
            <h1>Projects</h1>

          </div>


        </div>
      </div >




    </>
  )
}

export default App
