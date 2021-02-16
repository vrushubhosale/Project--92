function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input")

    localStorage.setItem("player_1name", player1_name);
    localStorage.getItem("player2_name", player2_name);

    window.location = "game_page.html";
}

player1name = localStorage.getItem("player1_name");
player2name = localStorage.getItem("player2_name");

player1score = 0;
player2score = 0;

document.getElementById("player_1name").innerHTML + ": ";
document.getElementById("player_2name").innerHTML + ": ";

document.getElementById("player1score").innerHTML + player1score;
document.getElementById("player2score").innerHTML + player2score;

document.getElementById("player_question").innerHTML + player1name;
document.getElementById("player_answer").innerHTML + player2name;

function send(){
    get_word = document.getElementById("word").nodeValue;
    word = getword.tolowercase();
    console.log("word in lower case = "+word);
    charAT1 = word.chartAT1(1);
    console.log(chartAT1);

    length_divide_2 = Math.floor(word.lenght/2);
    charAT2 = word.charAT(length_divide_2);
    console.log(chartAT2);

    lenght_minus_1 = word.lenght - 1;
    chartAT3 = word.charAT(length_minus_1);
    console.log(charAT3);

    remove_charAT1 = word.replace(charAT1,"_");
    remove_charAT2 = word.replace(charAT2,"_");
    remove_charAT3 = remove_charAT2.replace(charAT3,"_");
    console.log(remove_charAT3);

    qestion_word = "<h4 id='word_display'> Q."+remove_charAT3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = ""; 
}
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.tolowercase();
    console.log("answer in lower case - " + answer);
    if(answer == word){
        if(answer_turn == "player1"){
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }
        else{
            player2score = player2score +1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name ;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }
    else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }

    document.getElementById("output").innerHTML = "";
}