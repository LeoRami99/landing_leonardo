/* import Image from 'next/image'
import styles from './page.module.css' */

/* Importación de bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../app/components/navbar";
/* Importar font awesome */
import "@fortawesome/fontawesome-free/css/all.css";

export default function Home() {
	/* Estilos  */
	const styles = {
		background_hero: {
			backgroundImage:
				"url(https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9120.jpg?w=1060&t=st=1683510932~exp=1683511532~hmac=885f99f439b36247e124dfed674284b581a8dd1ae054f94dab265eb85bf66bed)",
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			height: "100vh",
		},
		gap_icons: {
			marginRight: "10px",
			fontSize: "30px",
		},
		blur: {
			backdropFilter: "blur(10px)",
		},
	};
	return (
		<>
			<header>
				{/* Navbar */}
				<Navbar />

				{/* Hero con imagen*/}
				<div
					className="px-4 py-5 text-center text-white d-flex justify-content-center flex-column align-items-center"
					style={styles.background_hero}
				>
					{/*  <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
					<div className="shadow">
						<h1 className="display-5 fw-bold">Centered hero</h1>
						<div className="col-lg-6 mx-auto">
							<p className="lead mb-4">
								Quickly design and customize responsive
								mobile-first sites with Bootstrap, the world’s
								most popular front-end open source toolkit,
								featuring Sass variables and mixins, responsive
								grid system, extensive prebuilt components, and
								powerful JavaScript plugins.
							</p>
							<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
								<button
									type="button"
									className="btn btn-primary btn-lg px-4 gap-3"
								>
									Primary button
								</button>
								<button
									type="button"
									className="btn btn-outline-secondary btn-lg px-4"
								>
									Secondary
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* End */}
			</header>
			<div className="container">
				<main>
					<section id="yo">
						{/* Mis skills */}
						<div className="row align-items-center">
							<div className="col-lg-6 order-lg-2">
								<div className="p-5">
									<img
										className="img-fluid rounded-circle"
										src="https://avatars.githubusercontent.com/u/31749560?v=4"
										alt="Leonardo Ramirez"
									/>
								</div>
							</div>
							<div className="col-lg-6 order-lg-1">
								<div className="p-5">
									<h2 className="display-4">¿Quien soy?</h2>
									<p>
										Hola mi nombre es Leonardo Ramirez, soy
										Ingeniero de Sistema que se dedica al
										desarrollo de software, me gusta mucho
										el desarrollo web y el desarrollo de
										aplicaciones móviles. Me gusta mucho
										aprender cosas nuevas y me considero una
										persona muy autodidacta.
									</p>
									<h4 className="display-10">
										¡Sigueme en mis redes sociales!
									</h4>
									<span className="lead">
										Y conoce mis debilidades:
									</span>
									<div className="d-flex align-items-center mt-2 text-center">
										<a
											href="https://instagram.com/mmordekai99"
											target="_blank"
											style={{color: "#000"}}
										>
											<i
												className="fa-brands fa-instagram"
												style={styles.gap_icons}
											></i>
										</a>
										<a
											href="https://instagram.com/mmordekai99"
											target="_blank"
											style={{color: "#000"}}
										>
											<i
												className="fa-brands fa-github"
												style={styles.gap_icons}
											></i>
										</a>
										<a
											href="https://instagram.com/mmordekai99"
											target="_blank"
											style={{color: "#000"}}
										>
											<i
												className="fa-brands fa-linkedin"
												style={styles.gap_icons}
											></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id="skill" >
						<div className="row align-items-center justify-content-center">
							<div className="col order-lg-2">
								<div className="p-5">
									<h2 className="display-4">Mis Skills</h2>
                  
								</div>
                
							</div>
						</div>
            <div className="row">
              <div className="col-lg-4">
                <div className="p-5">
                  <h2 className="display-4">Frontend</h2>
                  <ul>
                    <li>HTML <i className="fa-brands fa-html5"></i></li>
                    <li>CSS <i className="fa-brands fa-css3"></i></li>
                    <li>JavaScript <i className="fa-brands fa-js"></i></li>
                    <li>React <i className="fa-brands fa-react"></i></li>
                    <li>NextJS <i className="fa-brands fa-nextjs"></i></li>
                    <li>Bootstrap <i className="fa-brands fa-bootstrap"></i></li>
                    <li>Vue <i className="fa-brands fa-vuejs"></i></li>
                  </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="p-5">
                  <h2 className="display-4">Backend</h2>
                  <ul>
                    <li>NodeJS <i className="fa-brands fa-node-js"></i></li>
                    <li>Express <i className="fa-brands fa-expressjs"></i></li>
                    <li>PHP <i className="fa-brands fa-php"></i></li>
                    <li>MySQL <i className="fa-brands fa-mysql"></i></li>
                    <li>MongoDB <i className="fa-brands fa-html5"></i></li>
                    <li>PostgreSQL <i className="fa-brands fa-html5"></i></li>
                    <li>Python <i className="fa-brands fa-html5"></i></li>
                  </ul>
                  </div>
                  </div>
            </div>


					</section>
				</main>
			</div>
		</>
	);
}
