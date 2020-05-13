// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question.
A question should include:
a) question itself
b) the answers from which the player can choose the correct one
(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console,
together with the possible answers (each question should have a number)
(Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer.
The user should input the number of the correct answer such as
you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether
the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code.
So make sure that all your code is private and doesn't interfere with
the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question,
so that the game never ends (Hint: write a function for this and
call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends.
So include the option to quit the game if the user writes 'exit'
instead of the answer.
In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun!
So each time an answer is correct, add 1 point to the score
(Hint: I'm going to use the power of closures for this, but you don't have to,
just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
    function Question(question, answers, correct_answer) {
        this.question = question;
        this.answers = answers;
        this.correct_answer = correct_answer
    }

    var question_01 = new Question(
        "What is the best code languages ?",
        "\n1 - Python \n2 - C++ \n3 - Javascript"
        // "3"
        )
    question_01.correct_answer = "3";

    var question_02 = new Question(
        "What is the colors of Brasil's flag ?",
        "\n1 - blue, white, yellow \n2 - blue, red, white \n3 - jamaica color"
        // "1"
        )
    question_02.correct_answer = "1";

    var question_03 = new Question(
        "How to declare a variable in ES06 ?",
        "\n1 - var and let \n2 - let and const \n3 - var and const"
        // "3"
        )
    question_03.correct_answer = "2";

    var score = 0

    Question.prototype.displayQuestion = function() {
        console.log(this.question, "\n", this.answers);
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct_answer) {
            console.log("Correct");
            sc = callback(true);
        } else {
            console.log("Wrong");
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log(`Your score is ${score}`);
        console.log(`-----------------------`);
    }

    function scoreFunction() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = scoreFunction();

    var questionsList = [question_01, question_02, question_03]

    function nextQuestion() {
        var n = Math.floor(Math.random() * questionsList.length);
        questionsList[n].displayQuestion();

        var answer = prompt("Return your answer", "**");
        document.getElementById("btn-answer").addEventListener("click", function() {
            document.getElementById("demo").innerHTML = `Your answer is: <strong>${answer}</strong>`;
            console.log(`Your answer was: ${answer}`);

        })
        if (answer !== "exit") {
            questionsList[n].checkAnswer(answer, keepScore);
            nextQuestion();
        }

    }

    nextQuestion();






























    // Question.prototype.quiz  = function() {
    //     console.log(`${this.question} :\n ${this.answers}`);
    // };

    // function checkAnswer(result) {

    //     if (result === this.correct_answer) {
    //         document.getElementById("demo").innerHTML =
    //         "Your answer is " + result + "! Congrats ... its correct";
    //         console.log(`Your answer ${result} is CORRECT !!`);
    //         keepScore(true);

    //     } else if (result === "exit") {
    //         location.reload();

    //     } else {
    //         document.getElementById("demo").innerHTML =
    //         "Your answer is " + result + ". Sorry, incorrect. Try again.";
    //         console.log(`Your answer ${result} is NOT Correct. Try again !!`);
    //         keepScore(false);
    //     }

    //     questionsList[n].quiz();
    // }

    // function score() {
    //     var userScore = 0;
    //     return function(correct) {
    //         if (correct) {
    //             userScore++;
    //         }
    //         return userScore;
    //     }
    // };

    // var keepScore = score();


    // questionsList[n].quiz();


    // document.getElementById("btn-answer").addEventListener("click", function() {
    //     var result = prompt("Select one answer number from: ( 1 ) ( 2 ) ( 3 ) ?", "***");
    //     checkAnswer(result);
    // })

})();






















