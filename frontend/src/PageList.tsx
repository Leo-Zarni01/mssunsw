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
}

export default PageList;