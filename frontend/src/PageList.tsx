import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import OurStory from './components/OurStory.tsx';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ourstory' element={<OurStory />} />
        </Routes>
    )
}

export default PageList;