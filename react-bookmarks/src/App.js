import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Search Bookmarks: <input id="search"></input>
        <div id="bookmarks"></div>
        <div id="editdialog"></div>
        <div id="deletedialog"></div>
        <div id="adddialog"></div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
