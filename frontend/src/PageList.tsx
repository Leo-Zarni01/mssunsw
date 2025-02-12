import { Routes, Route } from 'react-router';
import Events from './pages/Events.tsx';
import HomePage from './pages/HomePage.tsx';
import OurStory from './pages/OurStory.tsx';
import UpcomingEventDetails from './pages/UpcomingEventDetails.tsx';
import PastEventPhotoGallery from './pages/PastEventPhotoGallery.tsx'

const PageList = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ourstory' element={<OurStory />} />
      <Route path='/events/1' element={<UpcomingEventDetails />} />
      <Route path='/events/:eventId/photos' element={<PastEventPhotoGallery />} /> {/* /events/:id/photos */}
      <Route path='/events' element={<Events />} />
    </Routes>
  )
}

export default PageList;
