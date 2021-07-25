
const questions = [
    {
        "question": "What sort of animal is Tux, the official mascot of the Linux operating system?",
        "answer": "Penguin"
    },
    {
        "question": "What is a software program that crawls the web, searching and indexing web pages?",
        "answer": "Spider"
    },
    {
        "question": "For what does the acronym IT stand?",
        "answer": "Information Technology"
    },
    {
        "question": "How many bits are there in a byte?",
        "answer": "8"
    },
    {
        "question": "What does the acronym LCD stand for?",
        "answer": "Liquid Crystal Display"
    },
    {
        "question": "Which popular company designed the first CPU?",
        "answer": "Intel"
    },
    {
        "question": "Which computer hardware device performs the functions like click, point, drag, or select.",
        "answer": "Mouse"
    },
    {
        "question": "Question: What is the computer's main circuit board called?",
        "answer": "Motherboard"
    },
    {
        "question": "What is the name of the system that manages and programs hardware resources for a computer?",
        "answer": "Operating System"
    },
    {
        "question": "Which information storage is used to store short-term running programs and data in a computer?",
        "answer": "RAM"
    },
    {
        "question": "Which input device is used to enter letters, numbers, and other characters into a computer?",
        "answer": "Keyboard"
    },
    {
        "question": "Which output device is used to display information in visual pictorial form?",
        "answer": "Monitor"
    },
    {
        "question": "Which web browser is run by the Mozilla Corporation?",
        "answer": "Firefox"
    },
    {
        "question": "Which computer company invented the first floppy disks, hard disk drives, and DRAMS?",
        "answer": "IBM"
    },
    {
        "question": "Which company invented the USB port?",
        "answer": "Intel"
    }
]

// let btn = document.querySelector("#btnCheck")
// btn.onclick = () => {

// }


// let form = document.querySelector('#questions')

// for(e of form.elements){
//     console.log(e)
// }
let createForm = () => {
    let questionsForm = document.querySelector('#questions')
    for(let i=0; i<questions.length; i++) {
        let input = document.createElement('INPUT')
        input.id = "input" + i;
        let label = document.createElement('LABEL')
        label.htmlFor = 'input' + i;
        label.innerText = questions[i].question
        let p = document.createElement('P')
        p.appendChild(input)
        p.appendChild(label)
        questionsForm.appendChild(p)
    }
}

let checkForm = () => {
    let counter = 0;
    let form = document.querySelector("#questions")
    for(let i=0; i<questions.length; i++) {
        let input = form[i];
        if(input.value === questions[i].answer) {
            counter++
        }

    }

    return counter
}


createForm()

let btn = document.querySelector('#btn')
btn.onclick = () => {
    let results = checkForm()
    let form = document.querySelector('#questions')
    form.innerHTML = ''
    let p = document.createElement('P')
    p.innerText = "results" + results + "/" + questions.length;
    document.body.appendChild(p)

}