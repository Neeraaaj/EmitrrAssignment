import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useLeaderboard } from '../LeaderboardContext';
import { useParams } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  description: string;
}

const Loading: React.FC = () => (
  <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2 rounded-tr-[50%] rounded-bl-[50%]">
    <p className="text-xl text-gray-500">Loading...</p>
  </div>
);

const HTML: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [timerIntervalId, setTimerIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [status, setStatus] = useState('');
  const {addScoreToLeaderboard} = useLeaderboard();
  const { username } = useParams();
  const Language = "HTML"

  useEffect(() => {
    fetch('http://localhost:5000/html')
      .then((response) => response.json())
      .then((data: Question[]) => setQuestions(data))
      .catch((error) => console.error('Error fetching quiz data:', error));

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        return prevTimer > 0 ? prevTimer - 1 : prevTimer;
      });
    }, 1000);

    setTimerIntervalId(intervalId);

    return () => {
      clearInterval(intervalId);
      if (timer <= 0) {
        setShowResult(true);
      }
    };
  }, [timer]);

  const handleAnswerSelect = (questionId: number, selectedOption: string) => {
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoading(true);

    if (timerIntervalId) {
      clearInterval(timerIntervalId);
    }

    setTimeout(() => {
      const quizScore = calculateScore(answers);
      setScore(quizScore);
      const percentage = (quizScore / questions.length) * 100;
      const newStatus = percentage >= 50 ? 'Passed' : 'Failed';
      setStatus(newStatus);

      setShowResult(true);
      setLoading(false);

      if(username){
        addScoreToLeaderboard(username, quizScore, Language);
      }

    }, 5000);
  };

  const calculateScore = (userAnswers: { [key: number]: string }): number => {
    const correctAnswers = questions.map((question) => question.answer);
    let score = 0;
    for (const questionId in userAnswers) {
        const numericQuestionId = parseInt(questionId, 10); // Convert questionId to a number
        if (!isNaN(numericQuestionId) && userAnswers[questionId] === correctAnswers[numericQuestionId - 1]) {
          score++;
        }
      }
      
    return score;
  };

  const restartQuiz = () => {
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setLoading(false);
    setTimer(60);
    navigate('/HTML');
  };

  return (
  <div>
    <NavBar Logout={true}/>
        <section>
        <div className="md:w-9/12 w-[90%] flex md:flex-row flex-col mx-auto">
            <div className="md:w-[70%] w-full">
            <div>
                {questions.map((question, index) => (
                <div
                    key={question.id}
                    className="m-3 py-3 px-4 shadow-sm border border-gray-200 rounded "
                >
                    <p className="flex items-center rounded text-xs p-2 cursor-pointer">
                    <span className="h-8 w-8 bg-[#FCC822] rounded-full flex justify-center items-center text-green-800 mr-3">
                        {index + 1}
                    </span>
                    <p className="">{question.question}</p>
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                    {question.options.map((option, optionIndex) => (
                        <div
                        className={`border border-gray-200 rounded text-xs p-2 cursor-pointer ${
                            answers[question.id] === option ? 'bg-gray-300' : ''
                        }`}
                        key={option}
                        onClick={() => handleAnswerSelect(question.id, option)}
                        >
                        <p className="text-[10px] mb-1">Option {optionIndex + 1}</p>
                        <p>{option}</p>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
                <button onClick={handleSubmit} className="bg-[#FCC822] px-6 py-2 text-white rounded">
                Submit Quiz
                </button>
            </div>
            </div>

            {/* answer  section*/}
            <div className="md:w-[30%] w-full p-4">
            {showResult && (
                <div>
                <h3 className="text-2xl font-medium">Your Score: </h3>
                <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2 rounded-tr-[50%] rounded-bl-[50%]">
                    <h3 className={`text-xl ${status === 'Passed' ? 'text-green-800' : 'text-red-500'}`}>
                    {status}
                    </h3>
                    <h1 className="text-3xl font-bold my-2">
                    {score * 10}
                    <span className="text-slate-800">/50</span>
                    </h1>
                    <p className="text-sm flex justify-center items-center gap-2">
                    Total Time:{' '}
                    {/* <span className="text-xl text-orange-500">
                        {formatTime(60 - timer)}
                        <span className="text-xs">sec</span>
                    </span> */}
                    </p>
                </div>
                <button
                    onClick={restartQuiz}
                    className="bg-[#FCC822] text-white w-full py-2 rounded mt-16"
                >
                    Restart
                </button>
                </div>
            )}

            {loading && <Loading />}
            </div>
        </div>
        </section>
    </div>
  );
};

export default HTML;
