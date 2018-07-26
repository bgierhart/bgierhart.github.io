$(document).ready(function(){
  var quoteSource=[
  {
      quote: "The door is more than it appears. It seperates who you are from who you can be. You do not have to walk through it... You can run.",
      name:"Franklin Richards, FF vol. 1 issue 23 by Jonathan Hickman"
    },
    {
      quote: 'Do, or do not. There is no "try."',
      name:"Yoda, Star Wars Episode V: The Empire Strikes Back"
    },
    {
      quote:"It is our choices that show what we truly are, far more than our abilities.",
      name:"Albus Dumbledore, Harry Potter and the Chamber of Secrets by J.K. Rowling"
    },
    {
      quote:"You think you got the best of me/ Think you've had the last laugh/ Bet you think that everything good is gone/ Think you left me broken down/ Think that I'd come running back/ Baby you don't know me, cause you're dead wrong",
      name:'"Stronger," Kelly Clarkson'
    },
    {
      quote:"Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt.",
      name:'Lucio, "Measure for Measure" by William Shakespeare'
    },
    {
      quote:"There is only one thing on this earth more powerful than evil. And that's us.",
      name:'Buffy Summers, "Buffy the Vampire Slayer" s07e10'
    },
    {
      quote:"Everyone I have ever cared for has either died, or left me. Everyone, fucking except for you! So don't tell me I would be safer with someone else because the truth is I would just be more scared.",
      name: 'Ellie, "The Last of Us"'
    }
];
  $('#quoteButton').click(function(evt){
    //Define targeted info containers
    var quote = $('#quoteContainer p').text();
    var quoteColleague = $('#quoteColleague').text();
    //Prevent browser default action
    evt.preventDefault();
    //getting a new random number to attach to a quote and set a limit
    var sourceLength = quoteSource.length;
    var randomNumber= Math.floor(Math.random()*sourceLength);
    //Set a new quote
    for(i=0;i<=sourceLength;i+=1){
    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuoteColleague = quoteSource[randomNumber].name;
    //console.log(newQuoteText,newQuoteColleague);
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
    //Fade out animation,callback
    quoteContainer.fadeOut(timeAnimation, function(){
      quoteContainer.html('');
    quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteColleague">'+'-'+newQuoteColleague+'</p>');

      //fFade-in animation.
      quoteContainer.fadeIn(timeAnimation);
    });

    break;
  };//End for loop

});//End quoteButton function


});//End document ready
