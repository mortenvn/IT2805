var s,
Stopwatch = {
  settings: {
    display: document.getElementById('display-area'),
    toggleButton: document.getElementById('toggle-button'),
    resetButton: document.getElementById('reset-button'),
    timer: null,
    stopTime: 0,
    startTime: 0,
    isRunning: false
  },

  init: function() {
    s = this.settings;

    s.toggleButton.addEventListener('click', this.startStopTimer);
    s.resetButton.addEventListener('click', this.resetTimer);
  },

  startStopTimer: function() {
    if (s.isRunning === false) {
      s.isRunning = true;
      s.startTime = new Date().getTime();
      s.timer = setInterval(Stopwatch.updateDisplay,1);
    }

    else {
      s.isRunning = false;
      s.stopTime += new Date().getTime() - s.startTime;
      clearInterval(s.timer);
    }
  },

  resetTimer: function() {
    s.isRunning = false;
    s.startTime = 0;
    s.stopTime = 0;
    clearInterval(s.timer);
    s.display.innerHTML = "00:00:00.000";
  },

  updateDisplay: function() {
    var newTime = new Date().getTime() - s.startTime + s.stopTime;
    s.display.innerHTML = Stopwatch.formatDisplayTime(newTime);
  },

  formatDisplayTime: function(time) {
    var ms = time % 1000;
    time = (time - ms) / 1000;
    var s = time % 60;
    time = (time - s) / 60;
    var mins = time % 60;
    var hrs = (time - mins) / 60;

    return (('00' + hrs).slice(-2)) + ':' + (('00' + mins).slice(-2)) + ':' + (('00' + s).slice(-2)) + '.' + (('00' + ms).slice(-3));
  }
};