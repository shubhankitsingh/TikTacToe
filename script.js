let button =document.querySelectorAll(".button");
let reset=document.querySelectorAll(".other");

let turn0=true;

const win =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

button.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Button was clicked");
        if (turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const checkWinner=()=>{
    for (pattern of win){
        let v1=button[pattern[0]].innerText;
        let v2=button[pattern[1]].innerText;
        let v3=button[pattern[2]].innerText;

        if (v1!="" && v2!="" && v3!=""){
            if (v1===v2 && v2===v3){
                console.log("Winner", v1)
            }
        }
}
};
