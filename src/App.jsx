import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./features/menu/Menu";
import AppLayout from "./ui/AppLayout";
import MakeReservation from "./features/reservation/MakeReservation";
import Reservation from "./features/reservation/Reservation";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Menu />,
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
