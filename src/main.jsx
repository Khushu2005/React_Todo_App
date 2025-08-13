import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './components/index.css';
import { Bounce, ToastContainer } from 'react-toastify'
import Wrapper from './components/Wrapper.jsx';


createRoot(document.getElementById('root')).render(   <Wrapper>
        <App />
     < ToastContainer position='top-center' draggable/>
  </Wrapper>
);
