const FORM = document.querySelector('.form')
const RESULT = document.querySelector('.counter__result')

const FORM_ELEMENTS = {
    GENDER: FORM.elements.gender,
    AGE: FORM.elements.age,
    HEIGHT: FORM.elements.height,
    WEIGHT: FORM.elements.weight,
    ACTIVITY: FORM.elements.activity,
    SUBMIT_BUTTON: FORM.elements.submit,
    RESET_BUTTON: FORM.elements.reset,
}

const RESULT_ELEMENTS = {
    NORM: RESULT.querySelector('#calories-norm'),
    MINIMAL: RESULT.querySelector('#calories-minimal'),
    MAXIMAL: RESULT.querySelector('#calories-maximal'),
}


export { FORM, RESULT, FORM_ELEMENTS, RESULT_ELEMENTS }