import { Link, useLocation } from 'react-router-dom'
import CourseCard from './CourseCard'
import NavBar from './NavBar'

const QuizInterface = () => {
    const { state } = useLocation();
    const username = state?.username

  return (
    <>
        <NavBar Logout={true}/>
        <h1 className='font-extrabold text-4xl text-center lg:text-8xl md:text-6xl'>Welcome {username}</h1>
        <p className='text-center text-4xl lg:text-5xl md:text-3xl m-5'> Engage in interactive lessons, dynamic quizzes, and real-life conversations designed to accelerate your language acquisition.</p>
        <div className="flex flex-wrap gap-5 p-5 justify-center">

            <Link to={`/html/${username}`}>
                <CourseCard desc={"HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content."} src={"https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png"} title={"HTML (HYPERTEXT MARKUP LANGUAGE)"} />
            </Link>

            <Link to={`/css/${username}`}>
                <CourseCard desc={"Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXFvunsoDgDmBJ0YbBbY7XvXnesrEUX1NUQ&usqp=CAU"} title={"CSS3 (CASCADING STYLES SHEET)"} />
            </Link>

            <Link to={`/js/${username}`}>
                <CourseCard desc={"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)"} src={"https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png"} title={"JAVASCRIPT"} />
            </Link>
            <Link to={`/react/${username}`}>
                <CourseCard desc={"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js"} src={"https://cdn3d.iconscout.com/3d/free/thumb/free-react-5645899-4695757.png?f=webp"} title={"ReactJS"} />
            </Link>
            
        </div>
    </>
  )
}

export default QuizInterface
