import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomeSection from "./components/HomeSection";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomeSection /> }],
  },
]);

export default routes;
