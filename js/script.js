import { FORM, RESULT, FORM_ELEMENTS, RESULT_ELEMENTS } from './constants.js'

function enabledButton(button) {
    button.removeAttribute('disabled')
}

function disabledButton(button) {
    button.setAttribute('disabled', true)
}

function handleResetForm() {
    hideResult()
    disabledButton(FORM_ELEMENTS.SUBMIT_BUTTON)
    disabledButton(FORM_ELEMENTS.RESET_BUTTON)
}

function handleButtonsState() {
    const ageLength = FORM_ELEMENTS.AGE.value.length
    const heightLength = FORM_ELEMENTS.HEIGHT.value.length
    const weightLength = FORM_ELEMENTS.WEIGHT.value.length

    if (ageLength && heightLength && weightLength) {
        enabledButton(FORM_ELEMENTS.SUBMIT_BUTTON)
    } else {
        disabledButton(FORM_ELEMENTS.SUBMIT_BUTTON)
    }

    if (ageLength || heightLength || weightLength) {
        enabledButton(FORM_ELEMENTS.RESET_BUTTON)
    } else {
        disabledButton(FORM_ELEMENTS.RESET_BUTTON)
    }
}

function calculateCalorie({ gender, age, height, weight, activity }) {
    let calorie = 0

    const resultCalories = {
        minimal: 0,
        normal: 0,
        maximal: 0
    }

    if (gender === 'male') {
        calorie = (10 * weight) + (6.25 * height) - (5 * age) + 5
    }

    if (gender === 'female') {
        calorie = (10 * weight) + (6.25 * height) - (5 * age) - 161
    }

    switch (activity) {
        case 'min':
            resultCalories.normal = Math.round(calorie * 1.2)
            resultCalories.minimal = Math.round(calorie * 1.2 * 0.85)
            resultCalories.maximal = Math.round(calorie * 1.2 * 1.15)
            break;
        case 'low':
            resultCalories.normal = Math.round(calorie * 1.375)
            resultCalories.minimal = Math.round(calorie * 1.375 * 0.85)
            resultCalories.maximal = Math.round(calorie * 1.375 * 1.15)
            break;
        case 'medium':
            resultCalories.normal = Math.round(calorie * 1.55)
            resultCalories.minimal = Math.round(calorie * 1.55 * 0.85)
            resultCalories.maximal = Math.round(calorie * 1.55 * 1.15)
            break;
        case 'high':
            resultCalories.normal = Math.round(calorie * 1.725)
            resultCalories.minimal = Math.round(calorie * 1.725 * 0.85)
            resultCalories.maximal = Math.round(calorie * 1.725 * 1.15)
            break;
        case 'max':
            resultCalories.normal = Math.round(calorie * 1.9)
            resultCalories.minimal = Math.round(calorie * 1.9 * 0.85)
            resultCalories.maximal = Math.round(calorie * 1.9 * 1.15)
            break;
    }

    return resultCalories
}

function showResult() {
    RESULT.classList.remove('counter__result--hidden')
}

function hideResult() {
    RESULT.classList.add('counter__result--hidden')
}

function setResult({ minimal, normal, maximal }) {
    RESULT_ELEMENTS.MINIMAL.textContent = minimal
    RESULT_ELEMENTS.NORM.textContent = normal
    RESULT_ELEMENTS.MAXIMAL.textContent = maximal
}

function handleSubmitForm(evt) {
    evt.preventDefault()

    const data = {
        gender: FORM_ELEMENTS.GENDER.value,
        age: FORM_ELEMENTS.AGE.value,
        height: FORM_ELEMENTS.HEIGHT.value,
        weight: FORM_ELEMENTS.WEIGHT.value,
        activity: FORM_ELEMENTS.ACTIVITY.value,
    }

    setResult(calculateCalorie(data))
    showResult()
}

FORM_ELEMENTS.AGE.addEventListener('input', handleButtonsState)
FORM_ELEMENTS.HEIGHT.addEventListener('input', handleButtonsState)
FORM_ELEMENTS.WEIGHT.addEventListener('input', handleButtonsState)

FORM.addEventListener('reset', handleResetForm)
FORM.addEventListener('submit', handleSubmitForm)