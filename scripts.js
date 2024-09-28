const ingredientsButton = document.getElementById('toggle-ingredients');
const stepsButton = document.getElementById('toggle-steps');
const ingredientsList = document.getElementById('ingredients');
const stepsList = document.getElementById('steps');
const startCookingButton = document.getElementById('start-cooking');
const currentStep = document.getElementById('current-step');
const progressBar = document.getElementById('progress-bar');

let stepIndex = 0;
const steps = [
    'Marinate the chicken with spices and yogurt for 30 minutes.',
    'Fry onions until golden brown, and set aside.',
    'Cook the chicken until tender.',
    'Boil rice with spices until 70% cooked.',
    'Layer rice and chicken, add fried onions, and steam for 15 minutes.'
];

ingredientsButton.addEventListener('click', () => {
    if (ingredientsList.classList.contains('hidden')) {
        ingredientsList.classList.remove('hidden');
        ingredientsButton.textContent = 'Hide Ingredients';
    } else {
        ingredientsList.classList.add('hidden');
        ingredientsButton.textContent = 'Show Ingredients';
    }
});

stepsButton.addEventListener('click', () => {
    if (stepsList.classList.contains('hidden')) {
        stepsList.classList.remove('hidden');
        stepsButton.textContent = 'Hide Steps';
    } else {
        stepsList.classList.add('hidden');
        stepsButton.textContent = 'Show Steps';
    }
});

startCookingButton.addEventListener('click', () => {
    currentStep.textContent = steps[stepIndex];
    progressBar.style.width = `${(stepIndex + 1) / steps.length * 100}%`;
    stepIndex++;
    
    if (stepIndex === steps.length) {
        startCookingButton.disabled = true;
        currentStep.textContent = "Cooking complete!";
    }
});
