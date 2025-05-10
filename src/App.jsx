import './App.css'
import Intro from './pages/Intro'
import Start from './pages/Start'
import Question from './pages/Question'
import Result from './pages/Result'
import { useState, useEffect } from 'react'
import useLocalStorageUser from './tools/useLocalStorageUser.js'
import ShareModal from './components/ShareModal.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [user, setUser] = useLocalStorageUser();
  const [shareModalVisible, setShareModalVisible] = useState(false);

  useEffect(() => {
  const evaluatePage = () => {
    const hasFirstName = user && typeof user === 'object' && 'firstName' in user;
    const hasAnswers = hasFirstName && Array.isArray(user.answers);

    if (currentPage !== 'intro' && (!hasFirstName || (hasFirstName && !hasAnswers))) {
      setCurrentPage('intro');
    } else if (currentPage !== 'result' && hasFirstName && hasAnswers && user.answers.length === 20) {
      setCurrentPage('result');
    } else if (currentPage !== 'question' && hasFirstName && hasAnswers) {
      setCurrentPage('question');
    }
  };

  evaluatePage();
}, []);


  return (
    <div className="App">
      {shareModalVisible ? <ShareModal setShareModalVisible={setShareModalVisible} /> : ''}
      {currentPage === 'intro' && <Intro setCurrentPage={setCurrentPage} setShareModalVisible={setShareModalVisible} />}
      {currentPage === 'start' && <Start setCurrentPage={setCurrentPage} setShareModalVisible={setShareModalVisible} user={user} setUser={setUser} />}
      {currentPage === 'question' && <Question setCurrentPage={setCurrentPage} setShareModalVisible={setShareModalVisible} user={user} setUser={setUser} />}
      {currentPage === 'result' && <Result setCurrentPage={setCurrentPage} user={user} setUser={setUser} setShareModalVisible={setShareModalVisible}/>}
    </div>
  );
}

export default App;
