import { Icon } from '@iconify/react';
import '../App.css'
import { MouseEventHandler, useState} from 'react';
import Show from './Show';
import DontShow from './DontShow';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogin:MouseEventHandler<HTMLButtonElement> = () => {
     signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast.success("Success");
      setTimeout(() => {
        navigate(`/Quiz/:${username}`, {state : { username } })
      }, 1000)
    })
    .catch((err) => toast.error(err.message))
  }
  
  return (
   <>
    <div className="text-[#333]">
      <div className="grid lg:grid-cols-2 gap-4 bg-gradient-to-r from-blue-900 to-blue-400 sm:p-8 p-4 h-[320px]">
        <div>
          <Icon icon="logos:codesee-icon" className='text-white bg-white w-[50px] h-[50px] rounded-xl text-center p-2'/>
          <div className="max-w-lg mt-16 px-6 max-lg:hidden">
            <h3 className="text-8xl font-bold text-white">Sign in</h3>
            <p className="text-lg mt-4 text-black bg-white p-4 rounded-xl border-1 border-gray-300 shadow-xl">
  Welcome to the Quiz Adventure! Sign in to your account and dive into a world of knowledge and fun challenges. Embark on this exciting journey, earn points, and climb the ranks on the scoreboard. The realm of opportunities and possibilities awaits you!
</p>
          </div>
        </div>
        <div className="bg-white my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_4px_10px_-6px_rgba(9,91,257,0.7)] max-lg:mx-auto">
          <form>
            <div className="mb-10">
              <h3 className="text-4xl font-extrabold">Sign in</h3>
            </div>
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input name="username" type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div>
              <label className="text-sm mb-2 block">Username</label>
              <div className="relative flex items-center">
                <input name="username" type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div className="mt-6">
              <label className="text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input name="password" type={showPassword ? 'text' : 'password'} required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {
                  showPassword ? <Show showPassword={showPassword} onClick={() => setShowPassword(!showPassword)} /> : <DontShow dontShow={showPassword} onClick={() => setShowPassword(!showPassword)} />
                }
              </div>
            </div>
            <div className="mt-10">
              <button type="button" className="w-full shadow-xl py-2.5 px-4 text-lg font-semibold rounded text-white bg-blue-800 hover:bg-blue-600 focus:outline-none" onClick={handleLogin}>
                Log in
              </button>
            </div>
            <p className="text-sm mt-6 text-center">Don't have an account <Link to={"/signup"} className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
          </form>
        </div>
      </div>
    </div>
    <Toaster />
   </>
  )
}

export default Login