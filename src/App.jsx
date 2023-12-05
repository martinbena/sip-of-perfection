import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu, { loader as menuLoader } from "./pages/Menu";
import AppLayout from "./ui/AppLayout";
import MakeReservation, {
  action as makeReservationAction,
} from "./pages/MakeReservation";
import Reservation, {
  loader as reservationLoader,
} from "./features/reservation/Reservation";
import Contact from "./pages/Contact";
import Error from "./ui/Error";
import { action as updateReservationAction } from "./features/reservation/UpdateReservation";

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
        action: makeReservationAction,
        errorElement: <Error />,
      },
      {
        path: "/reservation/:reservationId",
        element: <Reservation />,
        loader: reservationLoader,
        errorElement: <Error />,
        action: updateReservationAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
