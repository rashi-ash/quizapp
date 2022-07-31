let currentquiz = 0
let score = 0
const quizdata =[
    {
        question:"what is the full form of http?",
        a:"Hyper Transfer Text Protocol",
        b:"Hyper Text Transfer Protocol",
        c:"Hexadecimal Text Transfer Protocol",
        d:"Hexadecimal Text Transfer Prototype",
        correct:"b",
    },
    {
        question:"what is the full form of html?",
        a:"HyperText Markup Language",
        b:"HyperText Markdown Language",
        c:"Hyperloop Machine Language",
        d:"HighTech Machine Language",
        correct:"a",
    },
    {
        question:"what is the full form of css?",
        a:"Cascading StyleSheets",
        b:"Cascading Simplesheets",
        c:"Cast SimpleSheet",
        d:"Centre SimpleSheet",
        correct:"a",
    },
    {
        question:"which company developed Javascript?",
        a:"IBM",
        b:"Netscape",
        c:"Sun MicroSystems",
        d:"Bell Labs",
        correct:"b",
    },
];

const quiz = document.getElementById('quiz')
const answertxt=document.querySelectorAll('.answer')
const questiontxt=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitbtn = document.getElementById('submit')

loadquiz()
function loadquiz(){
    deselectanswers()
    const currentquizdata = quizdata[currentquiz]
    questiontxt.innerText=currentquizdata.question
    a_text.innerText=currentquizdata.a
    b_text.innerText=currentquizdata.b
    c_text.innerText=currentquizdata.c
    d_text.innerText=currentquizdata.d
}

function deselectanswers(){
    answertxt.forEach(answertx => answertx.checked=false)
}
function selectedans(){
    let answer
    answertxt.forEach(answertx =>{
        if(answertx.checked){
            answer=answertx.id
        }
    })
    return answer
}

function submit(){
    const answer = selectedans()
    if(answer){
        if(answer === quizdata[currentquiz].correct){
            score++
        }
        currentquiz++
        if(currentquiz < quizdata.length){
            loadquiz()
        }
        else{
            quiz.innerHTML =
            `
            <h2>You answered ${score}/${quizdata.length} questions correctly </h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
}
submitbtn.addEventListener("click",submit);