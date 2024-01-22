import  { MouseEventHandler, useState } from 'react'
import Show from './Show';
import DontShow from './DontShow';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { Toaster, toast} from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()


    const handleSignUp:MouseEventHandler<HTMLButtonElement> = (e) => {
            e.preventDefault()
            console.log(email)
            console.log(password)
            console.log(confirmPassword)
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success("Registration Successfull!");
                setTimeout(() => {
                    navigate("/signin")
                }, 1000)
            })
            .catch((err) => toast.error(err.message))
        
    }
  return (
<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p className="mt-4 text-gray-500">
      Dive into interactive lessons that engage and challenge you, accelerating your language learning journey.
      </p>
    </div>

    <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                 {
                    showPassword ? <Show showPassword={showPassword} onClick={() => setShowPassword(!showPassword)} /> : <DontShow dontShow={showPassword} onClick={() => setShowPassword(!showPassword)} />
                  }

          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Confirm Password</label>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                 {
                    showPassword ? <Show showPassword={showPassword} onClick={() => setShowPassword(!showPassword)} /> : <DontShow dontShow={showPassword} onClick={() => setShowPassword(!showPassword)} />
                  }

          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account?
          <Link className="underline" to={"/signin"}>Sign In</Link>
        </p>

        <button
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src={"https://cdn.dribbble.com/users/4467980/screenshots/10066515/media/a85f92e2e28b742b3e1c168b2090deb1.png?resize=1000x750&vertical=center"}
      className="absolute inset-0 h-full w-full object-cover shadow-xl"
    />
    
  </div>
  <Toaster />
</section>
  )
}

export default SignUp