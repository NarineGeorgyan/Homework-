const gameContainer = document.getElementById(".game-container");
const boardContainer = document.querySelector(".board-container");
const key = ["ա","բ","գ","դ","է","ը","թ","ժ","ի","լ","խ","ծ","կ","del","հ","ձ","ղ","Ճ","մ","յ","ն","շ","ո","չ","enter","պ","ջ","ռ","ս","վ","տ","ր","ց","ի","փ","ք","օ","ֆ"]
const keyBoardContainer = document.querySelector(".keyboard-container");
const boardContainerArray = [];
const guessArray =[];
let guestWord = "պարապ";
const guestWordArray = guestWord.split('');

 function createBoard(){
     for (let i=0; i<25; i++){
        const boardCell = document.createElement('div');
        // boardCell.setAttribute('id',i)
        boardCell.classList.add("board-cell");
        boardContainer.appendChild(boardCell);
        boardContainerArray.push(boardCell);
        
     }
    
 }
 createBoard();
 let i=0;

     key.forEach((val,index)=>{
        const keyCell = document.createElement('button');
        keyCell.classList.add("btn-key");
        keyCell.innerText=key;
        keyCell.setAttribute('id',index);
        keyCell.innerText = val.toUpperCase();
        keyCell.addEventListener('click',(event)=>{
            if(event.target.id === "13"){
                 if (i>0){ 
                    i--;
                    boardContainerArray[i].innerText="";  
             }
            }else if(event.target.id === "24"){
                if(i < 5){
                    alert("Տառերի քանակը 5 քիչ չեն կարող լինել");
                }
                
                compareLetters()
            }else{
                if(i<5){
                    boardContainerArray[i].innerText = event.target.innerText
                    i++;

                   let p = event.getAttribute()
                   console.log(p)
                }   
            }   
        })
            
       keyBoardContainer.appendChild(keyCell)
    })
   

    function compareLetters(){
        guestWordArray.forEach((letter)=>{
            letter.toUpperCase();
            console.log(boardContainer.children)
            let key = getLetter()
                if(letter === boardContainer.children){
                    console.log("hi")
                // boardContainerArray[i].classList.add("guest-letter");
                    
                
               
            }
        })
    
    console.log("error") 
}

    


   
    //const divContent = document.createTextNode("letter") grel buutoni meg// 