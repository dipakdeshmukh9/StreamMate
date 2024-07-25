import Head from "./Components/Head";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Body from "./Components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResultContainer from "./Components/SearchResultContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Head /> {/* Ensure Head is inside the Router context */}
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <SearchResultContainer />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  );
}

export default App;
