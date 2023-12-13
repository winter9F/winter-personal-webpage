import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <div className='container card mt-5 '>
        <div className="row justify-content-center">

          <section className='cont1 col col-lg-8 p-5'>
            <h1>Winter Faye</h1>
            <h6>Software Engineer</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis modi. Dolores inventore repudiandae neque facere harum explicabo, ratione, impedit dignissimos dolorem assumenda, quibusdam veritatis doloribus fugit id officia commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore molestiae sed quis blanditiis ipsam illo perferendis similique commodi sunt, aliquam fugiat. Quia sint neque labore voluptatem at! Enim, blanditiis.</p>
            <div>
              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/HTML5_logo_i7agog.png" className="logoHtml" alt="" />


              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/CSS3_logo_oxemt8.png" className="logoCss" alt="" />


              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/JavaScript_logo_rseodv.png" className="logoJs" alt="" />

              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702152146/Language%20Icons/Typescript_logo_wxdlan.png" className="logoTs" alt="" />
            </div>
          </section>


          <section className='cont2 d-none d-md-block col ps-5'>
            <div>
              <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1698336656/No_user_image_l3xbpn.jpg" alt="" />
            </div>
            <div className='d-none d-md-block pt-3'>
              <h5>Skills</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim repudiandae soluta ratione. Quo incidunt dignissimos tempora minus modi, fugit vero ducimus suscipit quasi dolorum aliquid similique a reiciendis illum?
              </p>
            </div>
          </section>



          <section className='cont3 container d-flex align-items-center'>
            <div className='col text-end p-2'>
              <a href="https://react.dev/" target="_blank">
                <img className="logoReact" src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/React_Logo_lkaxbz.png" alt="" />
              </a>
            </div>
            <div className='col text-center p-2'>
              <a href="https://nodejs.org/en" target="_blank">
                <img className="logoNode" src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/Nodejs_logo_l18ovx.png" alt="" />
              </a>
            </div>
            <div className='col text-start p-2'>
              <a href="https://www.mongodb.com/" target="_blank">
                <img className="logoMongo" src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/MongoDB_logo_mkiymt.png" alt="" />
              </a>
            </div>
          </section>


          <section>
            <h2 className='p-2 mt-3'>Projects</h2>
          </section>


          <section className="cont4 container mb-5 row">
            <div className='proj col-12 col-md text-center'>
              <div className='ratio ratio-16x9 '>
                <iframe src="https://www.youtube.com/embed/BrG12PTRiEY?si=KFFMDHFjBQwk1pcf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <button className='btn btn-dark'>Code on Github</button>
            </div>

            <div className='proj col text-center'>
              <div className='ratio ratio-16x9 '>
                <iframe src="https://www.youtube.com/embed/DRFvH5xaoLw?si=XFq-MAoWcHPxew5Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <button className='btn btn-dark'>Code on Github</button>
            </div>
          </section>




        </div>
      </div >




    </>
  )
}

export default App
