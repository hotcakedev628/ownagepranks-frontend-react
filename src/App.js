import './assets/scss/App.scss';
import NavLayout from './layout/NavLayout';
import MainLayout from './layout/MainLayout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLayout isOpen={true} />
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
