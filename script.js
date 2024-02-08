// ACCESSING ALL ELEMENTS USING DOM
let button = document.querySelectorAll(".btn");
let resetButton = document.getElementById("reset-button");
let game = document.getElementById('main');
let startButton = document.getElementById('start-button');
let win = document.getElementById('hide');
let turn = true;

//WINNING PATTERN ARRAY
 const winPattern = 
 [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

//player X AND player O
button.forEach((box)=>{
    box.addEventListener('click',()=>{
        resetButton.style.display = "block";
        box.disabled = true;
        if(turn === true)
        {
            turn = false;
             box.innerText = "X";
        }
        else{
            turn = true;
            box.innerText = "O";
        }

        checkwinner();
    });
});

// RESET BUTTON
resetButton.addEventListener("click",()=>{
    button.forEach((box)=>{
        box.innerText = "";
        win.style.display = "none";
        box.disabled = false;
    })
});
// START BUTTON

startButton.addEventListener('click',()=>{
    game.style.display = "block";
    startButton.style.display = "none";
}); 

//CHECKING WINNER
let checkwinner = ()=>{
    for(let pattern of winPattern)
    {
        postVal1 = button[pattern[0]].innerText;
        postVal2 = button[pattern[1]].innerText;
        postVal3 = button[pattern[2]].innerText;
        
       if(postVal1!= "" && postVal2 != "" && postVal3 != "")
       {
        if(postVal1 == postVal2 && postVal2 == postVal3)
        {
            win.style.display = "block";
            win.innerText = "Congratulations, Winner is "+postVal1;
            game.style.marginTop = "100px";
        }
       }
    }
}