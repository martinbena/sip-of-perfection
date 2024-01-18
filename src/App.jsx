import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as menuLoader } from "./pages/Menu";
import AppLayout from "./ui/AppLayout";
import { action as makeReservationAction } from "./pages/MakeReservation";
import { loader as reservationLoader } from "./features/reservation/Reservation";
import { action as updateReservationAction } from "./features/reservation/UpdateReservation";
import Loader from "./ui/Loader";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Contact = lazy(() => import("./pages/Contact"));
const MakeReservation = lazy(() => import("./pages/MakeReservation"));
const Reservation = lazy(() => import("./features/reservation/Reservation"));
const Error = lazy(() => import("./ui/Error"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
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
