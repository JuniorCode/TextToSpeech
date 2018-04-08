responsiveVoice.setDefaultVoice("US English Male");

if (annyang) {
  var commands = {
    'speak *text': function(text) {
      responsiveVoice.speak(text);
    }
  };
  annyang.addCommands(commands);
  
  annyang.start();
}
