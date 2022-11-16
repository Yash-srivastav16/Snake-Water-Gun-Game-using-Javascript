let round=10
let again=true
let point=0
while(round-- && again){
let string=["S","W","G"]
let random=string[(Math.floor(Math.random() * 3))]
let user=prompt("Enter S for Snake, W for Water and G for Gun")
if((random=='S' && user=='W') ||(random=='W' && user=='G')||(random=='G' && user=='S')){
  alert("You Loose")  
}
else if(random==user){
  continue
}
else{
    alert("You win")
    point++   
  }
  again=confirm("Play Again")
}
document.write("Game Over")
document.write("<br />")
document.write("Your points Are ",point)
