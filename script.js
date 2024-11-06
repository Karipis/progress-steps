const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const activeProgressBar = document.getElementById('activeProgressBar');
const steps = document.getElementsByClassName('step');

let activeStep = 1;

nextBtn.addEventListener('click', function () {

    if (activeStep < steps.length) {
        activeStep++;
        steps[activeStep - 1].classList.toggle('done');
        let widthString = activeProgressBar.style.width;
        widthString += 100;
        console.log(widthString);
        activeProgressBar.style.width = widthString;
    } else {
        activeStep = steps.length;
    }

    let percentage = ((activeStep - 1) / (steps.length - 1)) * 100;

    activeProgressBar.style.width = percentage + "%";

    changeButtons();


});


prevBtn.addEventListener('click', function () {
    if (activeStep > 1) {
        steps[activeStep - 1].classList.toggle('done');
        activeStep--;
    } else {
        activeStep = 1;
    }

    let percentage = ((activeStep - 1) / (steps.length - 1)) * 100;

    activeProgressBar.style.width = percentage + "%";

    changeButtons();



});

function changeButtons() {
    if (activeStep == 1) {
        prevBtn.style.cursor = 'not-allowed';
        prevBtn.style.backgroundColor = '#adadad';

    } else {
        prevBtn.style.cursor = 'pointer';
        prevBtn.style.backgroundColor = '#2788D6';
    }

    if (activeStep == steps.length) {
        nextBtn.style.cursor = 'not-allowed';
        nextBtn.style.backgroundColor = '#adadad';
    } else {
        nextBtn.style.cursor = 'pointer';
        nextBtn.style.backgroundColor = '#2788D6';
    }
}