import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Calculator from "./calculate/calculator/Calculator";
import Nisab from "./calculate/nisab/Nisab";
import ZakatGuides from "./calculate/guides/ZakatGuides";
import AskQuestion from "./calculate/askQuestion/AskQuestion";
import GiveZakat from "./give/giveZakat/GiveZakat";
import Sadaqah from "./give/giveSadaqah/Sadaqah";
import GivingFAQ from "./give/givingfaq/GivingFAQ";
import YourImpact from "./impact/your_Impact/YourImpact";
import ImpactStories from "./impact/impactStories/ImpactStories";

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
      {
        path: "/give_zakat",
        element: <GiveZakat />,
      },
      {
        path: "/give_sadaqah",
        element: <Sadaqah />,
      },
      {
        path: "/giving_faq",
        element: <GivingFAQ />,
      },
      {
        path: "/your_impact",
        element: <YourImpact />,
      },
      {
        path: "/impact_stories",
        element: <ImpactStories />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
