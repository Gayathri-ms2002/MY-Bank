// script.js

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('active');
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
}

// Calculate EMI dynamically
function calculateEMI() {
    const principal = parseFloat(document.getElementById('principal').value);
    const years = parseFloat(document.getElementById('years').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;

    if (principal && years && interest) {
        const numberOfMonths = years * 12;
        const emi = (principal * interest * Math.pow(1 + interest, numberOfMonths)) / (Math.pow(1 + interest, numberOfMonths) - 1);
        document.getElementById('emi-value').innerText = 'EMI: ' + emi.toFixed(2);
    } else {
        document.getElementById('emi-value').innerText = 'EMI: ';
    }
}
// Calculate Approx Loan Amount dynamically
function calculateApproxLoan() {
    const monthlyIncome = parseFloat(document.getElementById('monthly-income').value);
    const existingObligation = parseFloat(document.getElementById('existing-obligation').value);
    const loanTenure = parseFloat(document.getElementById('loan-tenure').value);

    if (monthlyIncome && existingObligation && loanTenure) {
        const approxLoanAmt = ((monthlyIncome - existingObligation) * loanTenure) / 10;
        document.getElementById('approx-loan-amt').innerText = approxLoanAmt.toFixed(2);
    } else {
        document.getElementById('approx-loan-amt').innerText = '0';
    }
}


// Add event listeners for dynamic calculation
document.getElementById('monthly-income').addEventListener('input', calculateApproxLoan);
document.getElementById('existing-obligation').addEventListener('input', calculateApproxLoan);
document.getElementById('loan-tenure').addEventListener('input', calculateApproxLoan);


// Add event listeners for dynamic calculation
document.getElementById('principal').addEventListener('input', calculateEMI);
document.getElementById('years').addEventListener('input', calculateEMI);
document.getElementById('interest').addEventListener('input', calculateEMI);
