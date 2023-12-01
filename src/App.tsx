import { useState } from 'react';
import  BoxContainer from "./components/boxlist"
import logo from "./assets/toucantoco.png";
import './App.css';
import "./styles.css";

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="background">
      <img src={logo} alt="Toucan Toco logo" className="logo-image" />
      <BoxContainer search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
