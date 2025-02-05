import './App.css'
import PageList from './PageList.tsx';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <PageList />
    </BrowserRouter>
  );
}

export default App
