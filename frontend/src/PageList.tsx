import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default PageList;