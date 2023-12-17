import './App.css'

function App() {

  return (
    <>


      <div className='body'>


        <div className='container cont card bg-dark card mt-5 '>
          <div className="row justify-content-center">

            <section className='cont1 bg-white col col-lg-7 p-5'>

              <div className='row mb-2'>
                <div className='col-9'>
                  <h1>Winter Faye</h1>
                  <h6>Software Engineer</h6>
                </div>
                <div className='col text-end'>
                  <a href="https://www.linkedin.com/in/winterfaye/"><img className='logoLinkedIn' src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702833676/Language%20Icons/LinkedIn_icon_vi2xdq.jpg" alt="" /></a>
                </div>
              </div>
              <div>
                <p>Aspiring Software Engineer with a working knowledge of both backend and frontend development. Currently seeking opportunities, including internships, to apply my skills and learn from experienced professionals. I am passionate about fostering innovation in an inclusive working environment, and eager to make positive contributions to projects while growing within a collaborative team!</p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/HTML5_logo_i7agog.png" className="logoHtml" alt="" />


                <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/CSS3_logo_oxemt8.png" className="logoCss" alt="" />


                <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702150439/Language%20Icons/JavaScript_logo_rseodv.png" className="logoJs" alt="" />

              </div>
            </section>


            <section className=' cont2 d-block col-md'>




              <div className='text-end'>
                <img src="https://res.cloudinary.com/dqggp5pir/image/upload/v1702676360/Winter/WinterPic_cvjvgf.jpg" alt="" />
              </div>

              <div className='skills pt-3'>

                <ul>
                  <h4>Skills</h4>
                  <li>
                    Html | Css | JavaScript
                  </li>
                  <li>
                    Express | React | Bootstrap
                  </li>
                  <li>
                    NodeJS | MongoDB | MongoseODM
                  </li>

                </ul>
              </div>
            </section>



            <section className='bg-light border-bottom d-none d-md-flex align-items-center'>
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

            <section className='bg-dark border-top border-light'>
              <div className='card-header row d-flex align-items-center'>
                <div className='col-5 text-start'>
                  <h2 className='ProjTitle p-2 mt-3'>Projects</h2>
                </div>
                <div className='col text-end'>
                  <a href="https://github.com/winter9F/winter-personal-webpage"><button className='btn btn-danger'>Code for this Page</button></a>
                </div>
              </div>
            </section>

            <section className="proj mb-5 row align-items-center">
              <div className='proj col-12 col-md border border-secondary'>
                <a href="https://github.com/winter9F/winter-social-network-app"><button className='btn btn-light'>Code on Github</button></a>
                <div className='ratio ratio-16x9 '>
                  <iframe src="https://www.youtube.com/embed/BrG12PTRiEY?si=KFFMDHFjBQwk1pcf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                </div>
              </div>

              <div className='proj col border border-secondary '>
                <a href="https://github.com/winter9F/winter-notes-app"><button className='btn btn-light'>Code on Github</button></a>
                <div className='ratio ratio-16x9 '>
                  <iframe src="https://www.youtube.com/embed/DRFvH5xaoLw?si=XFq-MAoWcHPxew5Z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                </div>
              </div>
            </section>




          </div>
        </div >


      </div >

    </>
  )
}

export default App
