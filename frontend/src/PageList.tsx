import { Routes, Route } from 'react-router';
import Events from './pages/Events.tsx';
import OurStory from './pages/OurStory.tsx';
import UpcomingEventDetails from './pages/UpcomingEventDetails.tsx';
import PastEventPhotoGallery from './pages/PastEventPhotoGallery.tsx'
import HomePage from './pages/HomePage.tsx';
import GetInvolved from './pages/GetInvolved.tsx';

const PageList = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/aboutus' element={<OurStory />} />
      <Route path='/events/1' element={<UpcomingEventDetails />} />
      <Route path='/events/:eventId/photos' element={<PastEventPhotoGallery />} /> {/* /events/:id/photos */}
      <Route path='/events' element={<Events />} />
      <Route path='/getinvolved' element={<GetInvolved />}/>
    </Routes>
  )
}

export default PageList;
