import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/Home'
import { CryptoDetails } from './pages/CryptoDetails'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/crypto",
    element: <CryptoDetails />,
  },
]);
