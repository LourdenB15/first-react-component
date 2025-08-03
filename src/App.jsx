import "./styles/reset.css";
import "./styles/styles.css";
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="container">
      <Header />
      <Profile />
      {/* 
      <Footer /> */}
    </div>
  )
}

export default App
