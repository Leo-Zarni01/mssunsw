import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import OurStory from './components/OurStory.tsx';
import UpcomingEventDetails from './components/UpcomingEventDetails.tsx';
import PastEventPhotoGallery from './components/PastEventPhotoGallery.tsx'

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ourstory' element={<OurStory />} />
            <Route path='/events' element={<UpcomingEventDetails />} /> {/* /events/:id */}
            <Route path='/events/:eventId/photos' element={<PastEventPhotoGallery />} /> {/* /events/:id/photos */}
            
        </Routes>
    )
}

export default PageList;