
const todayYear = document.getElementById('today_year');
let todayDate = new Date();
let currentYear = todayDate.getFullYear();
todayYear.textContent += ` ${currentYear}`;

