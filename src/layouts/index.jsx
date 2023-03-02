import { Link, Outlet } from "react-router-dom";

const links = [
	{
		label: "Home",
		to: "/",
	},
	{
		label: "About",
		to: "/about",
	},
];

const Header = () => {
	return (
		<>
			<header>
				<nav>
					<ul>
						{links.map((link) => (
							<li key={link.to}>
								<Link to={link.to}>{link.label}</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
};

const MainLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default MainLayout;
