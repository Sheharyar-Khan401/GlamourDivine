import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import "./assets/css/common.css";
import Header from './Components/Header/Header';
import Home from './pages/homepage/Home';
import { AppRouter } from './routes/routes';

function App() {
  return (<>
      <Header/>
      <AppRouter/>
      </>
  );
}

export default App;
