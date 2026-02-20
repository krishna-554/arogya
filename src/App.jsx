import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Feed from './pages/Feed';
import AskQuestion from './pages/AskQuestion';
import QuestionDetail from './pages/QuestionDetail';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('feed');
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: 'Is irregular periods normal?',
      description: 'I\'ve been having irregular periods for the past 3 months. Should I be worried? Does anyone have similar experiences?',
      category: 'Periods',
      author: 'Anonymous Sister',
      isAnonymous: true,
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      replies: [
        {
          id: 1,
          author: 'Dr. Priya',
          isDoctor: true,
          text: 'Irregular periods can be due to stress, diet changes, or hormonal imbalances. I\'d recommend seeing a gynecologist to rule out any underlying conditions. However, occasional irregularity is quite common.',
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        },
        {
          id: 2,
          author: 'Anonymous Sister',
          isDoctor: false,
          text: 'I went through the same thing! Turns out my thyroid was acting up. Got it checked and everything\'s better now.',
          createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
        }
      ]
    },
    {
      id: 2,
      title: 'Dealing with period anxiety',
      description: 'Before my period starts, I get really anxious and sad. Is this PMS? What helps?',
      category: 'Mental Health',
      author: 'SarahW',
      isAnonymous: false,
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      replies: [
        {
          id: 3,
          author: 'Anonymous Sister',
          isDoctor: false,
          text: 'This is definitely PMDD or PMS! Exercise really helps me. Even a 20-minute walk makes a difference.',
          createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        }
      ]
    },
    {
      id: 3,
      title: 'Questions about birth control options',
      description: 'Looking for different birth control methods. What\'s everyone\'s experience with different options?',
      category: 'Sexual Health',
      author: 'Anonymous Sister',
      isAnonymous: true,
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      replies: []
    },
  ]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('feed');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('feed');
  };

  const handleAddQuestion = (newQuestion) => {
    const question = {
      id: Math.max(...questions.map(q => q.id), 0) + 1,
      ...newQuestion,
      createdAt: new Date(),
      replies: []
    };
    setQuestions([question, ...questions]);
    setCurrentPage('feed');
  };

  const handleAddReply = (questionId, reply) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          replies: [...q.replies, {
            id: Math.max(...(q.replies.map(r => r.id) || [0]), 0) + 1,
            ...reply,
            isDoctor: user?.role === 'doctor',
            createdAt: new Date()
          }]
        };
      }
      return q;
    }));
  };

  const getFilteredQuestions = () => {
    if (!selectedCategory) return questions;
    return questions.filter(q => q.category === selectedCategory);
  };

  const selectQuestion = (questionId) => {
    setSelectedQuestionId(questionId);
    setCurrentPage('detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'feed':
        return <Feed questions={getFilteredQuestions()} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} onSelectQuestion={selectQuestion} />;
      case 'ask':
        return <AskQuestion onSubmit={handleAddQuestion} user={user} />;
      case 'detail':
        const question = questions.find(q => q.id === selectedQuestionId);
        return question ? <QuestionDetail question={question} onAddReply={handleAddReply} user={user} /> : null;
      case 'about':
        return <About />;
      default:
        return <Feed questions={getFilteredQuestions()} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} onSelectQuestion={selectQuestion} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Navbar currentPage={currentPage} onNavigate={setCurrentPage} user={user} onLogout={handleLogout} />
          <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
            {renderPage()}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
