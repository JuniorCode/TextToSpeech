responsiveVoice.setDefaultVoice("US English Male");

if (annyang) {
  var commands = {
    "*text": function(text) {
      responsiveVoice.speak(text);
    }
  };

  annyang.addCommands(commands);

  annyang.start();
}
