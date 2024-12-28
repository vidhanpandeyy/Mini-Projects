const keys = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const notes = ["", "m"]; // Major and Minor
let isRunning = false;
let intervalId;

// Function to generate a random chord
function getRandomChord() {
  const key = keys[Math.floor(Math.random() * keys.length)];
  const note = notes[Math.floor(Math.random() * notes.length)];
  return `${key}${note}`;
}

// Function to speak the chord and display it on the page
function speakChord(chord) {
  // Display the chord on the page
  const randomOutput = document.getElementById("randomOutput");
  randomOutput.textContent = `Random Chord: ${chord}`;
  randomOutput.classList.add("show");

  // Use Web Speech API to speak the chord
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(chord);
  synth.speak(utterance);
}

// Toggle function for starting and stopping chord generation
function toggleChordGeneration() {
  const toggleButton = document.getElementById("toggleButton");

  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    toggleButton.textContent = "Start";
  } else {
    isRunning = true;
    toggleButton.textContent = "Stop";
    intervalId = setInterval(() => {
      const chord = getRandomChord();
      speakChord(chord);
    }, 2500);
  }
}

// Expose the function to the global window object
window.toggleChordGeneration = toggleChordGeneration;
