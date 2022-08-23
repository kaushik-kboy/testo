import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer'
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState('Guest');

  const changeUser = (user) => {
    setUser(user)
  }

  function onChangeHndler(e){
    changeUser(e.target.value)
  }
  return (
    <div className="App">
      Hello, {user}
      <Header onChangeHndler={onChangeHndler} />
      <Footer user={user}/>
    </div>
  );
}

export default App;
