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
			backgroundImage: "url(imgs/fondo-hero.jpg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundAttachment: "fixed",
			height: "100vh",
		},
		background_skills: {
			backgroundImage: "url(imgs/fondo-skills_dos.jpg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundAttachment: "fixed",
		},
		gap_icons: {
			marginRight: "10px",
			fontSize: "30px",
		},
		blur: {
			/* color blanco */
			
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
					<div className="">
						<h1 className="display-5 fw-bold">
							Juan Leonardo Ramirez Velasquez
						</h1>
						<div className="col-lg-6 mx-auto">
							<p className="lead mb-4">
								Ingeniero de Sistemas, Desarrollador de Software
								apacionado por el software libre y el desarrollo
								web.
							</p>
							{/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
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
							</div> */}
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
											href="https://github.com/LeoRami99"
											target="_blank"
											style={{color: "#000"}}
										>
											<i
												className="fa-brands fa-github"
												style={styles.gap_icons}
											></i>
										</a>
										<a
											href="https://www.linkedin.com/in/jleonardoramirez"
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
				</main>
			</div>
			<section
				id="skills"
				className="text-white"
				style={styles.background_skills}
			>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col text-center">
							<div className="p-5">
								<h2 className="display-4">Mis Skills</h2>
							</div>
						</div>
					</div>
					<div className="row text-center justify-content-center">
						<div className="col-md-5 mx-5 mb-5 rounded shadow-lg" style={styles.blur}>
							<div className="p-5">
								<h2 className="display-4">Frontend</h2>
								{/*grid de techs */}
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/html5-40-1175193.png"
									alt="" style={{width:"80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/css3-11-1175239.png"
									alt="" style={{width:"80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"
									alt="" style={{width:"80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
									alt="" style={{width:"80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/bootstrap-226077.png"
									alt="" style={{width:"80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png"
									alt="" style={{width:"80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"
									alt="" style={{width:"80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/next-js-1175001.png"
									alt="" style={{width:"80px"}}
									className="mx-2 my-3"
								/>
							</div>
						</div>
						<div className="col-md-5 mb-5 rounded shadow-lg" style={styles.blur}>
							<div className="p-5">
								<h2 className="display-4">Backend</h2>
								{/*grid de techs */}
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/express-1174949.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/mysql-3628940-3030165.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/postgresql-226047.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/flask-51-285137.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/django-2-282855.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
								<img
									src="https://cdn.iconscout.com/icon/free/png-512/php-27-226042.png"
									alt=""
									style={{width: "80px"}}
									className="mx-2 my-3"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
