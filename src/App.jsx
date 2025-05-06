import './App.css'
import Intro from './pages/Intro'
import Start from './pages/Start'
import Question from './pages/Question'
import Result from './pages/Result'
import { useState } from 'react'
import useLocalStorageUser from './tools/useLocalStorageUser.js'

function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [user, setUser] = useLocalStorageUser();

  return (
    <div className="App">
      {currentPage === 'intro' && <Intro setCurrentPage={setCurrentPage} />}
      {currentPage === 'start' && <Start setCurrentPage={setCurrentPage} user={user} setUser={setUser}/>}
      {currentPage === 'question' && <Question setCurrentPage={setCurrentPage} user={user} setUser={setUser}/>}
      {currentPage === 'result' && <Result setCurrentPage={setCurrentPage} user={user} setUser={setUser}/>}
    </div>
  );
}

export default App;
