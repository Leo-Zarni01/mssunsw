import { Routes, Route } from 'react-router';
import Events from './pages/Events.tsx';
import HomePage from './pages/HomePage.tsx';
import OurStory from './pages/OurStory.tsx';
import UpcomingEventDetails from './pages/UpcomingEventDetails.tsx';
import Teams from './pages/Teams.tsx';

const PageList = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ourstory' element={<OurStory />} />
      <Route path='/events/1' element={<UpcomingEventDetails />} />
      <Route path='/events' element={<Events />} />
      <Route path='/teams' element={<Teams />} />
    </Routes>
  )
}

export default PageList;
