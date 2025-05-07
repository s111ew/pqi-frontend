import './App.css'
import Intro from './pages/Intro'
import Start from './pages/Start'
import Question from './pages/Question'
import Result from './pages/Result'
import { useState } from 'react'
import useLocalStorageUser from './tools/useLocalStorageUser.js'
import ShareModal from './components/ShareModal.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [user, setUser] = useLocalStorageUser();
  const [shareModalVisible, setShareModalVisible] = useState(false);

  return (
    <div className="App">
      {shareModalVisible ? <ShareModal setShareModalVisible={setShareModalVisible} /> : ''}
      {currentPage === 'intro' && <Intro setCurrentPage={setCurrentPage} setShareModalVisible={setShareModalVisible} />}
      {currentPage === 'start' && <Start setCurrentPage={setCurrentPage} user={user} setUser={setUser} />}
      {currentPage === 'question' && <Question setCurrentPage={setCurrentPage} user={user} setUser={setUser} />}
      {currentPage === 'result' && <Result setCurrentPage={setCurrentPage} user={user} setUser={setUser} setShareModalVisible={setShareModalVisible}/>}
    </div>
  );
}

export default App;
