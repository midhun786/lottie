import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Lottie from 'react-lottie';
import animationData from "./lottie/93948-wait-loading-animation.json"

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className="App">
     <h1>hello world</h1>
     <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
    </div>
  );
}

export default App;
