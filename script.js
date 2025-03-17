console.log("Script.js berhasil dimuat!");
document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "Apa ibu kota Indonesia?",
            answers: ["Jakarta", "Surabaya", "Bandung", "Medan"],
            correct: 0
        },
        {
            question: "Siapa penemu lampu pijar?",
            answers: ["Isaac Newton", "Albert Einstein", "Thomas Edison", "Nikola Tesla"],
            correct: 2
        },
        {
            question: "Berapa hasil dari 5 x 6?",
            answers: ["30", "25", "20", "35"],
            correct: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-btn");
    const scoreElement = document.getElementById("score");

    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            // Tampilkan pertanyaan
            questionElement.textContent = questions[currentQuestionIndex].question;
            answersElement.innerHTML = "";

            // Tampilkan jawaban sebagai tombol
            questions[currentQuestionIndex].answers.forEach((answer, index) => {
                const button = document.createElement("button");
                button.textContent = answer;
                button.onclick = () => checkAnswer(index);
                button.style.display = "block";
                button.style.margin = "5px";
                answersElement.appendChild(button);
            });

            // Sembunyikan tombol "Pertanyaan Selanjutnya"
            nextButton.style.display = "none";
        } else {
            // Jika semua pertanyaan habis, tampilkan skor akhir
            questionElement.textContent = `Game selesai! Skor akhir: ${score}`;
            answersElement.innerHTML = "";
            nextButton.textContent = "Mulai Lagi";
            nextButton.style.display = "block";
        }
    }

    function checkAnswer(index) {
        if (index === questions[currentQuestionIndex].correct) {
            alert("Jawaban benar!");
            score++;
        } else {
            alert("Jawaban salah!");
        }

        scoreElement.textContent = score;
        nextButton.style.display = "block"; // Munculkan tombol untuk lanjut
    }

    function nextQuestion() {
        currentQuestionIndex++;

        if (currentQuestionIndex >= questions.length) {
            currentQuestionIndex = 0;
            score = 0;
            scoreElement.textContent = score;
        }

        showQuestion();
    }

    // Pastikan tombol "Pertanyaan Selanjutnya" berfungsi
    nextButton.addEventListener("click", nextQuestion);

    // Mulai game dengan menampilkan pertanyaan pertama
    showQuestion();
});
