import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutus' />
            <Route path='/events' />
            <Route path='/team' />
            <Route path='/getinvolved' />
        </Routes>
    )
}

export default PageList;