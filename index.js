
var buttonColours=['red','blue', 'green','yellow'];
var gamePattern=[];
var userClickedPattern=[];

var started=false;

var level=0;



$('.mybtn').click(function(){
if(!started){
    
 $('#level-title').text('level '+level);
 nextSequence();
 started=true;
}
  
});


$(document).keypress(function(){
if(!started){
    
 $('#level-title').text('level '+level);
 nextSequence();
 started=true;
}


  
});


 


$('.btn').click(function(){
  var userChosenColor=$(this).attr('id');

  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
animatePress(userChosenColor);

checkAnswer(userClickedPattern.length-1);
     
});


function checkAnswer(CurrentLevel){
       if (gamePattern[CurrentLevel] === userClickedPattern[CurrentLevel]) {

      console.log('success');

   if (userClickedPattern.length===gamePattern.length){

    setTimeout(function(){

     nextSequence();
},1000);
}

 } else {
console.log('wrong');

playSound('wrong')

$('body').addClass('game-over');

setTimeout(function(){
     $('body').removeClass('game-over');
},200);
     
$('#level-title').text('Game Over, Press any key/ click on Restart');
$('.mybtn').text('Restart');

startOver();

}

}






function nextSequence(){
    userClickedPattern = [];
level++;

$('#level-title').text('level '+level);

 var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColor= buttonColours[randomNumber];
  gamePattern.push(randomChosenColor); 

  $('#' +randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);  

    playSound(randomChosenColor);


}









function playSound(name){
   var audio= new Audio('sounds/' +name+ '.mp3');
  audio.play()
}



function animatePress(currentColour){

    $('#'+currentColour).addClass('pressed');

    setTimeout(function(){
      $('#'+currentColour).removeClass('pressed')
  },100)


}

function startOver(){
       level=0;
       userClickedPattern=[];
       started=false;
}
