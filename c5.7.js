const btn = document.querySelector('.j-btn-request');
const myJSON = JSON.parse(localStorage.getItem('myJSON'));
if (myJSON) {
    resultDisplay(myJSON)
};
function resultDisplay(data) {
    document.getElementById("placehere").innerHTML = ''
    for (let i = 0; i < data.length; i++) {
        let elem = document.createElement("img");
        elem.setAttribute("src", data[i].download_url);
        document.getElementById("placehere").appendChild(elem);
    }
};
btn.addEventListener('click', () => {
    const page = parseInt(document.getElementById('page').value, 10);
    const limit = parseInt(document.getElementById('limit').value, 10);
    let s = document.getElementById("result");
    s.textContent = 'вне диапазона от 1 до 10';
    let diapazone = true;
    if ((Object.is(page, NaN) === true) || page < 1 || page > 10) {
        diapazone = false;
        s.textContent = "Номер страницы " + s.textContent;
    }
    if ((Object.is(limit, NaN) === true) || limit < 1 || limit > 10) {
        diapazone = false;
        s.textContent = "Лимит " + s.textContent;
    }
    if (diapazone) {
        s.textContent = 'ok';
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => {
                response.json().then((data) => {
                    localStorage.setItem('myJSON', JSON.stringify(data));
                    resultDisplay(data)
                });
            });
    }
});