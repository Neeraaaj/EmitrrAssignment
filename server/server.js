const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(cors());

app.get('/html', (req, res) => {
    res.json([
        {
            "id": 1,
            "question": "What is the purpose of HTML in Web Development?",
            "options":[
                "Styling web pages",
                "Defining data structure",
                "Programming server-side logic",
                "Creating the structure of the web pages"
            ],
            "answer": "Creating the structure of web pages",
            "description": "HTML(Hypertext Markup Language) is the standard markup language for creating the structrue of the web pages. It defines the elements and their arrangment, allowing browsers to intercept and display content on the internet."
        },
        {
            "id": 2,
            "question": "Whos is making the Web Standards?",
            "options": [
                "The World Wide Web Consortium",
                "Google",
                "Mozilla",
                "Microsoft"
            ],
            "answer": "The World Wide Web Consortium",
            "description": "The central organization who is responsible for creating and maintaining web standards is the World Wide Web Consortium (W3C). The W3C has defined dozens of standards, including the standard markup languages we use to build websites."
        },
        {
            "id": 3,
            "question": "What is the smallest header in HTML by default?",
            "options": [
                "h1",
                "h2",
                "h6",
                "h4"
            ],
            "answer": "h6",
            "description": "h6 is the smallest element in HTML by default"
        },
        {
            "id": 4,
            "question": "How to create an ordered list in HTML?",
            "options": [
                "<ul>",
                "<ol>",
                "<href>",
                "<b>"
            ],
            "answer": "<ol>",
            "description": "<ol> is used to create an ordered list in HTML"
        },
        {
            "id": 5,
            "question": "HTML files are saved by default with the extension?",
            "options": [
                ".html",
                ".h",
                ".ht",
                "None of the above"
            ],
            "answer": ".html",
            "description": "HTML files are saved by the .html or .htm extension."
        }
    ])
})

app.get('/css', (req, res) => {
    res.json([
        {
            "id": 1,
            "question": "What is CSS?",
            "options":[
                "CSS is a Style Sheet Language",
                "CSS is designed to separate the presentation and content, including layout, colors, and fonts.",
                "CSS is the language used to style the HTML documents",
                "All of the mentioned"
            ],
            "answer": "All of the mentioned",
            "description": "CSS is a style sheet language that stands for Cascading Style Sheet and is used to style HTML documents. CSS is mainly designed to separate the presentation and content, including layout, colors, and fonts."
        },
        {
            "id": 2,
            "question": "Which of the following tag is used to embed css in html pages?",
            "options": [
                "<css>",
                "<!DOCTYPE html>",
                "<script>",
                "<style>"
            ],
            "answer": "<style>",
            "description": "<style> </style> tag is used to embed CSS in HTML page, while <script> </script> is used to embed JS in HTML. <!DOCTYPE html> is HTML5 declaration."
        },
        {
            "id": 3,
            "question": "Which of the following CSS selectors are used to specify a group of elements?",
            "options": [
                "tag",
                "id",
                "class",
                "both class and tag"
            ],
            "answer": "class",
            "description": "Class selectors are used to specify a group of elements. Id selector specifies a particular unique element."
        },
        {
            "id": 4,
            "question": "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
            "options": [
                "HTML",
                "PHP",
                "CSS",
                "Ajax"
            ],
            "answer": "CSS",
            "description": "CSS is a style sheet language that stands for Cascading Style Sheet. CSS has introduced text, list, box, margin, border, color, and background properties."
        },
        {
            "id": 5,
            "question": "Which of the following CSS framework is used to create a responsive design?",
            "options": [
                "django",
                "rails",
                "larawell",
                "bootstrap"
            ],
            "answer": "bootstrap",
            "description": "Bootstrap is a free and open-source collection of tools for creating websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. It aims to ease the development of dynamic websites and web applications."
        }
    ])
})


app.get('/js', (req, res) => {
    res.json([
        {
            "id": 1,
            "question": "Javascript is an _____ language?",
            "options":[
                "Object-Oriented",
                "Object-Based",
                "Procedural",
                "None of the above"
            ],
            "answer": "Object-Oriented",
            "description": "Javascript is an Object-Oriented Language."
        },
        {
            "id": 2,
            "question": "What is the correct way to declare a variable in JavaScript? ",
            "options": [
                "variable x = 10;",
                "var x = 10;",
                " x = 10;",
                "int x = 10; "
            ],
            "answer": "int x = 10; ",
            "description": "In JavaScript, variables are declared using the 'var' keyword, followed by the variable name and an optional initial value."
        },
        {
            "id": 3,
            "question": "What is the correct JavaScript syntax to modify the content of the HTML element shown below?",
            "options": [
                "<p id='demo'>Welcome to JavaScript Quiz</p>",
                "document.getElementById('demo').innerHTML = 'Hello World!';",
                "demo.innerHTML = 'Hello World!'; ",
                "document.getElement('p').innerHTML = 'Hello World!';"
            ],
            "answer": "document.getElementById('demo').innerHTML = 'Hello World!';",
            "description": "To change the content of an HTML element using JavaScript, we need to select the element using its unique identifier (ID) and then update its 'innerHTML' property with the new content."
        },
        {
            "id": 4,
            "question": "What will be the output of the following code snippet? console.log(2 + '2')",
            "options": [
                "4",
                "22",
                "'22'",
                "'4'"
            ],
            "answer": "'22'",
            "description": "When the '+' operator is used with a string and a number, the number is converted to a string and concatenated."
        },
        {
            "id": 5,
            "question": "How do you check if a variable is an array in JavaScript?",
            "options": [
                "isArray(x) ",
                "x.isArray() ",
                "x instanceof Array",
                "typeof Array "
            ],
            "answer": "isArray(x) ",
            "description": "The 'isArray()' method is used to check if a variable is an array in JavaScript."
        }
    ])
})


app.get('/react', (req, res) => {
    res.json([
        {
            "id": 1,
            "question": "What is React.js?",
            "options":[
                "A JavaScript framework for building user interfaces.",
                "A server-side programming language.",
                "A database management system.",
                "A front-end CSS framework."
            ],
            "answer": "A JavaScript framework for building user interfaces.",
            "description": "React.js is a JavaScript library, not a framework, that is primarily used for building user interfaces (UIs). It allows developers to create reusable UI components and efficiently update the UI based on data changes."
        },
        {
            "id": 2,
            "question": "What does JSX stand for?",
            "options": [
                "JavaScript XML ",
                "Java Syntax Extension",
                "JSON Xchange Schema",
                "JavaScript Xerography"
            ],
            "answer": "JavaScript XML",
            "description": "JSX stands for JavaScript XML. It is an extension to JavaScript that allows you to write HTML-like syntax within your JavaScript code in React.js. JSX makes it easier to define the structure and layout of components."
        },
        {
            "id": 3,
            "question": "Which lifecycle method is invoked immediately after a component is rendered on the DOM?",
            "options": [
                "componentDidMount",
                "componentDidUpdate",
                "componentWillMount",
                "componentWillRender"
            ],
            "answer": "componentDidMount",
            "description": "The componentDidMount lifecycle method is invoked immediately after a component is rendered on the DOM. It is commonly used to fetch data from an API, set up event listeners, or perform any necessary initialization tasks. "
        },
        {
            "id": 4,
            "question":"What is the purpose of the 'key' prop in React? ",
            "options": [
                "It uniquely identifies a component in an array of components.",
                "It determines the visual styling of a component.",
                "It specifies the route for navigation within a React application.",
                "It defines the data type of a component's prop."
            ],
            "answer": "It uniquely identifies a component in an array of components.",
            "description": "The 'key' prop is used to provide a unique identifier to each component in an array of components. React uses this key to efficiently update and reconcile the components' virtual DOM when their positions or states change."
        },
        {
            "id": 5,
            "question": "What is the state of React class component?",
            "options": [
                "A JavaScript method for sorting arrays.",
                "A built-in object that stores component data.",
                "A CSS class used for component styling.",
                "A React component's initial render method."
            ],
            "answer": "A built-in object that stores component data.",
            "description": "State is a built-in object in React that allows components to store and manage data. It represents the current state of a component and can be updated using the setState() method."
        }
    ])
})

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`)
})