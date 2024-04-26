import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Calculator from "./calculate/calculator/Calculator";
import Nisab from "./calculate/nisab/Nisab";
import ZakatGuides from "./calculate/guides/ZakatGuides";
import AskQuestion from "./calculate/askQuestion/AskQuestion";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/calculate",
        element: <Calculator />,
      },
      {
        path: "/todays_nisab",
        element: <Nisab />,
      },
      {
        path: "/zakat_guides",
        element: <ZakatGuides />,
      },
      {
        path: "/ask_a_question",
        element: <AskQuestion />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
