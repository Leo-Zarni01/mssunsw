import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import OurStory from './components/OurStory.tsx';
import UpcomingEventDetails from './components/UpcomingEventDetails.tsx';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ourstory' element={<OurStory />} />
            <Route path='/events' element={<UpcomingEventDetails />} /> {/* /events/:id */}
            
        </Routes>
    )
}

export default PageList;