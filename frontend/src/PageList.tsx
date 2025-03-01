import { Routes, Route } from 'react-router';
import Events from './pages/Events.tsx';
import OurStory from './pages/OurStory.tsx';
import UpcomingEventDetails from './pages/UpcomingEventDetails.tsx';
import Teams from './pages/Teams.tsx';
import PastEventDetails from './pages/PastEventDetails.tsx';
import PastEventPhotoGallery from './pages/PastEventPhotoGallery.tsx'
import HomePage from './pages/HomePage.tsx';
import GetInvolved from './pages/GetInvolved.tsx';

const PageList = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about-us' element={<OurStory />} />
      <Route path='/events/:id' element={<UpcomingEventDetails />} />
      <Route path='/past-events/:id/photos' element={<PastEventPhotoGallery />} /> {/* /events/:id/photos */}
      <Route path='/events' element={<Events />} />
      <Route path='/team' element={<Teams />} />
      <Route path='/get-involved' element={<GetInvolved />} />
      <Route path='/past-events/:id' element={<PastEventDetails />} />
    </Routes>
  )
}

export default PageList;
