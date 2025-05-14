import './App.css'
import Intro from './pages/Intro'
import Start from './pages/Start'
import Question from './pages/Question'
import Loading from './pages/Loading'
import Result from './pages/Result'
import FourOhFour from './pages/FourOhFour.jsx'
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

    const renderPage = () => {
    switch (currentPage) {
      case 'intro':
        return <Intro setCurrentPage={setCurrentPage} setShareModalVisible={setShareModalVisible} />;
      case 'start':
        return <Start setCurrentPage={setCurrentPage} setShareModalVisible={setShareModalVisible} user={user} setUser={setUser} />;
      case 'question':
        return <Question setCurrentPage={setCurrentPage} setShareModalVisible={setShareModalVisible} user={user} setUser={setUser} />;
      case 'loading':
        return <Loading setCurrentPage={setCurrentPage} setShareModalVisible={setShareModalVisible} />;
      case 'result':
        return <Result setCurrentPage={setCurrentPage} user={user} setUser={setUser} setShareModalVisible={setShareModalVisible} />;
      default:
        return <FourOhFour setCurrentPage={setCurrentPage} setUser={setUser} setShareModalVisible={setShareModalVisible} />;
    }
  };


  return (
    <div className="App">
      {shareModalVisible ? <ShareModal setShareModalVisible={setShareModalVisible} /> : ''}
      {renderPage()}
    </div>
  );
}

export default App;
