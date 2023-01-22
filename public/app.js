// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase , ref , onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmKipCgzop6CaiU5D5-b_GrISXisTVhO4",
  authDomain: "quiz-app-with-data-base.firebaseapp.com",
  projectId: "quiz-app-with-data-base",
  storageBucket: "quiz-app-with-data-base.appspot.com",
  messagingSenderId: "20041613178",
  appId: "1:20041613178:web:b0a6a734f70274d35e20c3",
  measurementId: "G-N6B485WZXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();


function getdatafromdatabase (){
    const refrence = ref(db,'/Question')
    onChildAdded(refrence, function (data) {
        console.log(data.val())
        question.push(data.val())
    })
}
getdatafromdatabase()

var questions = [
    {
        numb: 1,
        question: " What is full form of ROM ?",
        answer: "Read only memory",
        options: [
          "Read other memcache",
          "Read only memory",
          "Read other memory",
          "Read only memcache"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language"
        ]
    },
  
    ];



var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent")
var indexNum = 0;
var marks = 0;



function showQueston(){
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML = "Question " + (indexNum + 1) + "/" + questions.length;
    ansParent.innerHTML = "";
    for (var i = 0; i < questions[indexNum].options.length; i++){
        ansParent.innerHTML += `<div class = "col-md-6 py-2">
        <button onclick = "checkAns('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class = "btn btn-success px-5 rounded-pill w-100">
        ${questions[indexNum].options[i]}
        </button>
        </div>`

    }
}
showQueston();


window.nextQuestion =function (){
    indexNum++;
    showQueston();
}

window.checkAns = function(a,b){
    if(a==b){
        marks++;
        console.log(marks);
    }
    if(indexNum+1 == questions.length){
        alert("Your Result: " + marks)
    }
    else{
        nextQuestion();
    }
}
