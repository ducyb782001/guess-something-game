import PageCollectionDetail from "./pages/PageCollectionDetail";
import NewHomePage from "./pages/NewHomePage";
import NotFound from "./pages/NotFound";
//list your routes here
export const routes = [
  {
    path: "/bo-suu-tap/tao",
    element: <NewHomePage />,
  },
  {
    path: "/bo-suu-tap/:id",
    element: <PageCollectionDetail />,
  },
  { path: "/", element: <NewHomePage /> },
  { path: "*", element: <NotFound /> },
];
