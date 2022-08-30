function periodicTable() {
    fetch('https://neelpatel05.pythonanywhere.com/')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = data => {
    const periodicRow = document.getElementById('pRow');
    data.forEach(element => {
        const elementSymbol = element.symbol;
        const div = document.createElement('div');
        div.classList.add('col-6');
        div.innerHTML = `
    <button class=" elementBtn d-block mx-auto shadow rounded" style="background-color:#${element.cpkHexColor};" onclick="elementInTube('${elementSymbol}')">${element.name}</button>
    `;
        periodicRow.appendChild(div);
    });
}

periodicTable();

const elementInTube = (symbol) => {
    const testTube = document.getElementById('testTube');
    testTube.classList.add('test-tube');
    if (symbol == 'Mg' || symbol == 'Li' || symbol == 'Fe' || symbol == 'Br' || symbol == 'Na') {
        testTube.setAttribute("src", `images/${symbol}.png`);
    }
    else {
        alert('Sorry budy this element is not available yet. Currently Available elments are  Li, Na, Mg, Fe, Br ');
    }
}
