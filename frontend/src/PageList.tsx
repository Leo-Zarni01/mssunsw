<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import UpcomingEventDetailsPage from './components/UpcomingEventDetailsPage.tsx';
const PageList = () => {
	return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/events' element={<UpcomingEventDetailsPage />} /> {/* /events/:id */}
    </Routes>
	)
=======
import { Routes, Route } from 'react-router';
import Events from './pages/Events.tsx';
import HomePage from './pages/HomePage.tsx';
import OurStory from './pages/OurStory.tsx';
import UpcomingEventDetails from './pages/UpcomingEventDetails.tsx';

const PageList = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ourstory' element={<OurStory />} />
      <Route path='/events/1' element={<UpcomingEventDetails />} />
      <Route path='/events' element={<Events />} />
    </Routes>
  )
>>>>>>> main
}

export default PageList;
