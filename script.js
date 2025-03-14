function play(user_choice){
    const choices=["rock","paper","scissors"];
    const computer_choice=choices[ Math.floor( Math.random()*3)];
    let result=" ";
    if (user_choice=== computer_choice){
        result="It's a draw! 🤝";
    }
    else if (user_choice==="rock" && computer_choice==="scissors" ||
             user_choice==="paper" && computer_choice==="rock"   ||
             user_choice ==="scissors" && computer_choice==="paper"
     ){
        result="you win 🎉";
     }
     else if (computer_choice==="rock" && user_choice==="scissors" ||
        computer_choice==="paper" && user_choice==="rock"   ||
        computer_choice==="scissors" && user_choice==="paper"
    ){
    result=" You lose! 😢";
    }
    document.getElementById("result").textContent =result;
    
    }