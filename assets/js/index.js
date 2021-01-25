const luckyButton = document.getElementById('button')
const logo = document.getElementById('logo')

let firstClick = true;

luckyButton.onclick = () => {
    firstClick = !firstClick;
    logo.style.backgroundImage = firstClick ? "url('assets/logo.svg')" : "url('assets/cat.jpg')";
}



