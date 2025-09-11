const quotes = Array.from(document.querySelectorAll('.quote'));
let count = 0;
quotes.forEach((quote) => {
    count += 1;
    quote.innerText = count + '. ' + quote.innerText;
})

const tasks = Array.from(document.querySelectorAll('.task'));
let count_task = 1;
tasks.forEach((task) => {
    task.innerText = count_task + '. ' + task.innerText;
    count += 1;
})

const text = Array.from(document.querySelectorAll(".lorem"));
const colors = ["yellow", "green", "blue"];
for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = colors[i % 3];
}

const links = Array.from(document.querySelectorAll(".link a"))
links.forEach((link) => {
    if (link.href.startsWith("https")) {
        link.innerText = link.innerText + " (external)";
    }
})

let year = new Date().getFullYear();
document.getElementById("year").textContent = year.toString();


let clicks_count = 0;
function getCountsClicks() {
    clicks_count += 1;
    document.getElementById("clicks_count").innerText = clicks_count.toString();
}

function resetClicks() {
    clicks_count = 0;
    document.getElementById("clicks_count").innerText = "0";
}