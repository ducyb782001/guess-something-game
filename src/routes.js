import PageCollectionDetail from "./pages/PageCollectionDetail";
import NewHomePage from "./pages/NewHomePage";
import NotFound from "./pages/NotFound";
import SecondHomePage from "./pages/SecondHomePage";
import HomePage from "./pages/HomePage";
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
  { path: "/test-second", element: <SecondHomePage /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];
