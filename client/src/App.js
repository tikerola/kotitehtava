import React, { useState } from 'react';
import Header from './components/Header'
import Messages from './components/Messages'
import MessageForm from './components/MessageForm'
import databaseImg from './assets/images/delete_database.png'
import axios from 'axios'

import './App.scss';


function App() {

  // Tracks changes to the database. Messages are being fetched with every change.
  const [databaseUpdated, setDatabaseUpdated] = useState(0)

  const cleanDatabase = async () => {
    await axios.delete('/api/delete')
    setDatabaseUpdated(-1)
  }

  return (
    <div className="app-container">
      <Header title="Simple Message Creator" />
      <div className="app-content-container">
        <MessageForm setDatabaseUpdated={setDatabaseUpdated} />
        <div className="app-delete-database">
          <p>Clean Database</p>
          <img src={databaseImg} height="100" alt="destroy database icon" onClick={cleanDatabase} />
          <p>Just Do It!</p>
        </div>
        <Messages databaseUpdated={databaseUpdated} />
      </div>
    </div>
  );
}

export default App;
