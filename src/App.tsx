import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div className='body'>


        <div className='cont card bg-dark container card mt-5 '>
          <div className="row justify-content-center">

            <section className='cont1 bg-white col col-lg-7 p-5'>
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


            <section className=' cont2 d-block col-md ps-5'>
              <div className='text-end'>
                <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1698336656/No_user_image_l3xbpn.jpg" alt="" />
              </div>
              <div className='skills pt-3'>
                <h5>Skills</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi enim repudiandae soluta ratione. Quo incidunt dignissimos tempora minus modi, fugit vero ducimus suscipit quasi dolorum aliquid similique a reiciendis illum?
                </p>
              </div>
            </section>



            <section className='container bg-light border-bottom d-none d-md-flex align-items-center'>
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

            <section className='bg-dark'>
              <section className='card-header'>
                <h2 className='ProjTitle p-2 mt-3 '>Projects</h2>
              </section>
            </section>

            <section className="proj container mb-5 row align-items-center">
              <div className='proj col-12 col-md border border-secondary'>
                <a href="https://github.com/winter9F/winter-portfolio-1"><button className='btn btn-light'>Code on Github</button></a>
                <div className='ratio ratio-16x9 '>
                  <iframe src="https://www.youtube.com/embed/BrG12PTRiEY?si=KFFMDHFjBQwk1pcf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>

              <div className='proj col border border-secondary '>
                <a href="https://github.com/winter9F/winter-portfolio-2"><button className='btn btn-light'>Code on Github</button></a>
                <div className='ratio ratio-16x9 '>
                  <iframe src="https://www.youtube.com/embed/DRFvH5xaoLw?si=XFq-MAoWcHPxew5Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </section>

            <a href=""><img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702576198/Language%20Icons/Indeed_logo_ezx44z.png" alt="" /></a>




          </div>
        </div >


      </div>

    </>
  )
}

export default App
