const navbar = () => {
	const styles = {
		blur_navbar: {
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			backdropFilter: "blur(10px)",
			color: "#fff",
		},
	};

	return (
		<nav
			className="navbar navbar-expand-lg fixed-top"
			style={styles.blur_navbar}
		>
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">
					Leonardo Ramirez
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link text-white" href="#yo">
								Sobre mi
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#skills">
								Skills
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default navbar;
