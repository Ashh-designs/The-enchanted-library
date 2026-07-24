// ===== DATA =====

const questions = [
    {
        text: "You discover a door in the Enchanted Library that has no handle. What do you do?",
        answers: [
            { text: "Try every possible way to open it.", room: "storm" },
            { text: "Wait patiently and watch for clues.", room: "greenhouse" },
            { text: "Leave it alone. Some doors are meant to stay closed.", room: "diary" },
            { text: "Search for a hidden passage instead.", room: "stacks" }
        ]
    },
    {
        text: "While exploring the library, you find a glowing book with your name on it. You...",
        answers: [
            { text: "Open it immediately.", room: "storm" },
            { text: "Carefully read only the first page.", room: "greenhouse" },
            { text: "Put it back. It feels too personal.", room: "diary" },
            { text: "Wonder who wrote it and start investigating.", room: "stacks" }
        ]
    },
    {
        text: "Which atmosphere feels most comforting to you?",
        answers: [
            { text: "Rain tapping against tall windows.", room: "storm" },
            { text: "Sunlight filtering through leaves.", room: "greenhouse" },
            { text: "Quiet candlelight in a small room.", room: "diary" },
            { text: "Dusty corridors full of forgotten secrets.", room: "stacks" }
        ]
    },
    {
        text: "Someone misunderstands you. What's your first reaction?",
        answers: [
            { text: "Explain exactly how you feel.", room: "storm" },
            { text: "Give them time to understand.", room: "greenhouse" },
            { text: "Keep your feelings to yourself.", room: "diary" },
            { text: "Move on—you don't need everyone to understand you.", room: "stacks" }
        ]
    },
    
    {
        text: "If you found a magical object in the library, which would you choose?",
        answers: [
            { text: "A crystal that glows with emotion.", room: "storm" },
            { text: "A tiny plant that blooms when cared for.", room: "greenhouse" },
            { text: "A locked journal whose pages reveal themselves slowly.", room: "diary" },
            { text: "A map that redraws itself every day.", room: "stacks" }
        ]
    },
    {
        text: "Your ideal weekend is...",
        answers: [
            { text: "Doing something exciting and memorable.", room: "storm" },
            { text: "Spending time with people you care about.", room: "greenhouse" },
            { text: "Relaxing alone with your favorite hobby.", room: "diary" },
            { text: "Exploring somewhere you've never been.", room: "stacks" }
        ]
    },
    {
        text: "A magical creature offers to guide you through the library. You...",
        answers: [
            { text: "Follow it without hesitation.", room: "storm" },
            { text: "Ask it lots of questions first.", room: "greenhouse" },
            { text: "Politely decline and continue on your own.", room: "diary" },
            { text: "Wander off in a different direction just to see what happens.", room: "stacks" }
        ]
    },
    {
        text: "Which quote feels the most like you?",
        answers: [
            { text: "\"Feel deeply.\"", room: "storm" },
            { text: "\"Grow at your own pace.\"", room: "greenhouse" },
            { text: "\"Not everything has to be shared.\"", room: "diary" },
            { text: "\"Question every rule.\"", room: "stacks" }
        ]
    },
    {
        text: "When you're working on something important, you usually...",
        answers: [
            { text: "Throw yourself into it with passion.", room: "storm" },
            { text: "Work steadily until it's finished.", room: "greenhouse" },
            { text: "Keep it private until you're ready to share.", room: "diary" },
            { text: "Do it your own way, even if it's unconventional.", room: "stacks" }
        ]
    },
    {
        text: "The library offers you one magical room to stay in forever. Which do you choose?",
        answers: [
            { text: "A tower surrounded by storms.", room: "storm" },
            { text: "A greenhouse overflowing with magical plants.", room: "greenhouse" },
            { text: "A hidden room lined with old journals.", room: "diary" },
            { text: "Endless shelves that no one has fully explored.", room: "stacks" }
        ]
    },
    {
        text: "What do you value most in a friendship?",
        answers: [
            { text: "Honesty and emotional openness.", room: "storm" },
            { text: "Kindness and loyalty.", room: "greenhouse" },
            { text: "Trust and understanding.", room: "diary" },
            { text: "Freedom to be yourself.", room: "stacks" }
        ]
    },
    {
        text: "Before leaving the Enchanted Library, you're allowed to take one thing with you.",
        answers: [
            { text: "A bottle filled with captured lightning.", room: "storm" },
            { text: "A seed that can grow into anything.", room: "greenhouse" },
            { text: "A small key with no label.", room: "diary" },
            { text: "A page torn from a book that has never been finished.", room: "stacks" }
        ]
    }
];

const results = {
    storm: {
        title: "The Storm-Glass Tower",
        tagline: "You were never meant to be quiet about anything.",
        description: "You live at full volume, even in silence — everything you feel, you feel all the way through. You don't ration your intensity, and you don't apologize for it. People are drawn to how alive you make a room feel, even when that aliveness comes with weather. You'd rather burn honestly than dim politely.",
        closing: "Some rooms hold storms. This one was built to.",
        image: "images/storm-glass-tower.png"
    },
    greenhouse: {
        title: "The Greenhouse Annex",
        tagline: "You grow things that take longer than a season.",
        description: "You don't rush what matters — trust, love, healing, all of it unfolds on its own time with you, and you've made peace with that. Where others want proof today, you're comfortable waiting for evidence that lasts. You're steadier than people give you credit for, and quietly, that's exactly why they keep coming back to you.",
        closing: "Nothing in here bloomed by accident.",
        image: "images/greenhouse-annex.png"
    },
    diary: {
        title: "The Locked Diary Shelf",
        tagline: "You are not hard to know — you're just selective about it.",
        description: "You keep the truest parts of yourself for the people who've actually earned them, and that's not distance, it's discernment. What looks guarded from the outside is really just care, pointed inward until it's safe to share. When you do open up, it means something — because you never do it lightly.",
        closing: "Some pages are only for the reader who's ready.",
        image: "images/locked-diary-shelf.png"
    },
    stacks: {
        title: "The Uncatalogued Stacks",
        tagline: "You were never going to fit in a single section.",
        description: "You resist being filed away as any one thing, and that's the point — you contain more than a label could hold. Independence isn't a phase for you, it's a philosophy. People who try to define you are always a step behind who you've already become.",
        closing: "Some things in this library were never meant to be catalogued. That's what makes them worth finding.",
        image: "images/uncatalogued-stacks.png"
    }
};

// ===== STATE =====

let currentQuestionIndex = 0;
let scores = { storm: 0, greenhouse: 0, diary: 0, stacks: 0 };

// ===== ELEMENTS =====

const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const retakeBtn = document.getElementById('retake-btn');

const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const progressFill = document.getElementById('progress-fill');

const resultTitle = document.getElementById('result-title');
const resultTagline = document.getElementById('result-tagline');
const resultDescription = document.getElementById('result-description');
const resultClosing = document.getElementById('result-closing');
const resultImage = document.getElementById('result-image');

// ===== FUNCTIONS =====

function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.text;

    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progressPercent + '%';

    answerOptions.innerHTML = '';

    currentQuestion.answers.forEach((answer) => {
        const btn = document.createElement('button');
        btn.textContent = answer.text;
        btn.classList.add('answer-btn');

        btn.addEventListener('click', () => {
            scores[answer.room]++;
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                renderQuestion();
            } else {
                showResult();
            }
        });

        answerOptions.appendChild(btn);
    });
}

function showResult() {
    let winningRoom = 'storm';
    let highestScore = scores.storm;

    for (const room in scores) {
        if (scores[room] > highestScore) {
            highestScore = scores[room];
            winningRoom = room;
        }
    }

    const result = results[winningRoom];

    resultTitle.textContent = result.title;
    resultTagline.textContent = result.tagline;
    resultDescription.textContent = result.description;
    resultClosing.textContent = result.closing;
    resultImage.src = result.image;

    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    scores = { storm: 0, greenhouse: 0, diary: 0, stacks: 0 };

    resultScreen.classList.remove('active');
    introScreen.classList.add('active');
}
// ===== EVENT LISTENERS =====

startBtn.addEventListener('click', () => {
    introScreen.classList.remove('active');
    quizScreen.classList.add('active');
    renderQuestion();
});

retakeBtn.addEventListener('click', resetQuiz);
