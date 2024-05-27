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
import HowYouHelp from "./impact/how you help/HowYouHelp";
import TheNeed from "./impact/the need/TheNeed";
import ApplyForHelp from "./apply/apply for help/ApplyForHelp";
import HardshipRelief from "./apply/hardship relief/HardshipRelief";
import Housing from "./apply/housing/Housing";
import WorkEducation from "./apply/work and edu/WorkEducation";
import AboutZakat from "./about zakat/about/AboutZakat";
import PurposeOfZakat from "./about zakat/purpose/PurposeOfZakat";
import HowZakatWorks from "./about zakat/how zakat/HowZakatWorks";
import Contact from "./contact/Contact";

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
      {
        path: "/how_you_help",
        element: <HowYouHelp />,
      },
      {
        path: "/the_need",
        element: <TheNeed />,
      },
      {
        path: "/apply_help",
        element: <ApplyForHelp />,
      },
      {
        path: "/hardship_relief",
        element: <HardshipRelief />,
      },
      {
        path: "/housing_fund",
        element: <Housing />,
      },
      {
        path: "/work_and_education",
        element: <WorkEducation />,
      },
      {
        path: "/about_zakat",
        element: <AboutZakat />,
      },
      {
        path: "/zakat_purpose",
        element: <PurposeOfZakat />,
      },
      {
        path: "/how_it_works",
        element: <HowZakatWorks />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
