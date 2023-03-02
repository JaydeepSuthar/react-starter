import { createBrowserRouter } from "react-router-dom";

// * Layout
import MainLayout from "./layouts";
import ErrorPage from "./layouts/error";

// * PAGES
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

export const routes = [
	{
		path: "/",
		label: "Home Page",
		element: <HomePage />,
	},
	{
		path: "/about",
		label: "Home Page",
		element: <AboutPage />,
	},
];

export default createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: routes.map((item) => ({
			path: item.path,
			element: item.element,
		})),
	},
]);
