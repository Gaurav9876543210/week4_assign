(function (window) {
    var byeSpeaker = {};
    // yaakovGreeter.name = "Yaakov";
    var speakWord = "GoodBye ";
    byeSpeaker.speak = function (name) {
      console.log(speakWord + name);
    }
  
    window.byeSpeaker = byeSpeaker;
  
  })(window);
