import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu, { loader as menuLoader } from "./pages/Menu";
import AppLayout from "./ui/AppLayout";
import MakeReservation from "./features/reservation/MakeReservation";
import Reservation from "./features/reservation/Reservation";
import Contact from "./pages/Contact";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/reservation/new",
        element: <MakeReservation />,
      },
      {
        path: "/reservation/:reservationId",
        element: <Reservation />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
