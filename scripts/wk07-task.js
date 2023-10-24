// Step 1: Definition various variables
const logForm = document.getElementById('logForm');
const activityInput = document.getElementById('activity');
const durationInput = document.getElementById('duration');
const dateInput = document.getElementById('date');
const logList = document.getElementById('logList');
const totalDurationDisplay = document.getElementById('totalDuration');
const averageDurationDisplay = document.getElementById('averageDuration');
const longestDurationDisplay = document.getElementById('longestDuration');
const shortestDurationDisplay = document.getElementById('shortestDuration');

// Step 2: Declaration of array
let logs = [];

// Step 3: Function is define here
function addLog(activity, duration, date) {
  const log = {
    activity,
    duration,
    date
  };

  logs.push(log);
}

// Step 4:Workout logs function  is define
function displayLogs() {
  logList.innerHTML = '';

  logs.forEach(log => {
    const listItem = document.createElement('li');
    listItem.textContent = `${log.activity} - ${log.duration} minutes - ${log.date}`;
    logList.appendChild(listItem);
  });
}

// Step 5: Function is use in calculating statistics
function calculateStatistics() {
  const totalDuration = logs.reduce((total, log) => total + parseInt(log.duration), 0);
  const averageDuration = totalDuration / logs.length || 0;
  const longestDuration = Math.max(...logs.map(log => parseInt(log.duration))) || 'None';
  const shortestDuration = Math.min(...logs.map(log => parseInt(log.duration))) || 'None';

  totalDurationDisplay.textContent = `Total Time: ${totalDuration} minutes`;
  averageDurationDisplay.textContent = `Average Time: ${averageDuration.toFixed(2)} minutes`;
  longestDurationDisplay.textContent = `Longest Time: ${longestDuration} minutes`;
  shortestDurationDisplay.textContent = `Shortest Time: ${shortestDuration} minutes`;
}

// Step 6: Event listener is added
logForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const activity = activityInput.value;
  const duration = durationInput.value;
  const date = dateInput.value;

  addLog(activity, duration, date);
  displayLogs();
  calculateStatistics();

  activityInput.value = '';
  durationInput.value = '';
  dateInput.value = '';
});

// Step 7: Display logs and calculate statistics
displayLogs();
calculateStatistics();


const year = new Date().getFullYear();

const yearElement = document.querySelector("#year");
yearElement.textContent = year;