let currentProgress = 0;

const form = document.getElementById('project-form');
const dashboard = document.getElementById('dashboard');

const projectTitle = document.getElementById('project-title');
const displayBudget = document.getElementById('display-budget');
const displayDays = document.getElementById('display-days');

const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const btnAdvance = document.getElementById('btn-advance');
const btnReset = document.getElementById('btn-reset');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const budget = document.getElementById('budget').value;
  const days = document.getElementById('days').value;

  projectTitle.textContent = name;
  displayBudget.textContent = `$${Number(budget).toLocaleString()}`;
  displayDays.textContent = days;

  currentProgress = 0;
  updateProgressBar();

  dashboard.classList.remove('hidden');
});

btnAdvance.addEventListener('click', () => {
  if (currentProgress < 100) {
    currentProgress += 25;
    if (currentProgress > 100) currentProgress = 100;
    updateProgressBar();
  }
});

btnReset.addEventListener('click', () => {
  currentProgress = 0;
  updateProgressBar();
});

function updateProgressBar() {
  progressFill.style.width = `${currentProgress}%`;
  progressText.textContent = `${currentProgress}% completado`;
}