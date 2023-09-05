import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import CreateBlog from "./components/CreateBlog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "create-blog", element: <CreateBlog /> },
    ],
  },
]);

export default routes;
