import './App.css';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VisionGoal from "./components/VisionGoal";
import ProfIncharge from "./components/ProfIncharge";
import UpcomingEvent from "./components/UpcomingEvent";
import PastEvent from "./components/PastEvent";
import CoreMember from "./components/CoreMember";
import TeamGallery from "./components/TeamGallery";
import Contactus from "./components/Contactus";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import CorporateRodies from './components/CorporateRodies';
import BusinessTycon from './components/BusinessTycon';
import IdeaHackathon from './components/IdeaHackathon';
import StarSpeaker from './components/StarSpeaker';
import TeenPrenure from './components/TeenPrenure';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <HeroSection />
      <VisionGoal />
      <ProfIncharge />
      <Footer />
    </>
  },
  {
    path: '/events',
    element: <>
      <Navbar />
      <UpcomingEvent />
      <PastEvent />
      <Footer />
    </>
  },
  {
    path: '/teams',
    element: <>
      <Navbar />
      <CoreMember />
      <TeamGallery />
      <Footer />
    </>
  },
  {
    path: '/contactus',
    element: <>
      <Navbar />
      <Contactus />
      <Footer />
    </>
  },
  {
    path: '/Aboutus',
    element: <>
      <Navbar />
      <About />
      <Footer />
    </>
  },
  {
    path: '/register',
    element: <>
      <Navbar />
      <Register />
      <Footer />
    </>
  },
  {
    path: '/pastevent/corporaterodies',
    element: <>
      <Navbar />
      <CorporateRodies />
      <Footer />
    </>
  },
  {
    path: '/pastevent/businesstycoon',
    element: <>
      <Navbar />
      <BusinessTycon />
      <Footer />
    </>
  },
  {
    path: '/pastevent/ideahackathon',
    element: <>
      <Navbar />
      <IdeaHackathon />
      <Footer />
    </>
  },
  {
    path: '/pastevent/starspeaker',
    element: <>
      <Navbar />
      <StarSpeaker />
      <Footer />
    </>
  },
  {
    path: '/pastevent/teenprenure',
    element: <>
      <Navbar />
      <TeenPrenure />
      <Footer />
    </>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
