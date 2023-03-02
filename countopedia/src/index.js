
import ReactDOM from 'react-dom/client';
import Counter from './Components/Counter';
import Header from './Layout/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{color:"grey"}}>
    <Header/>
    <Counter/>
  </div>
);

