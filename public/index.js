/* global VIRTUO*/
'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, { format: "yyyy-mm-dd" });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, { "responsiveThreshold": 0 });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("1");
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, null);
});

(() => {
    const renderPrice = (actor) => {
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');

        const template = `
                <div class="title topPad" id="price">
                    <span>Price : ${actor.amount}$</span>
                </div>
            `;

        div.innerHTML = template;
        fragment.appendChild(div);
        document.querySelector('#priceDIV').innerHTML = '';
        document.querySelector('#priceDIV').appendChild(fragment);
    }
});

(() => {
    const render = (actors) => {
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');

        const template = actors.map(actor => {
            if (actor == actors[0]) {
                return
            } else {
                return `
                    <div class="priceInfo">
                        <span>${actor.who}</span>
                        <span>${actor.amount}$</span>
                    </div>
                  `;
            }
        }).join('');

        div.innerHTML = template;
        fragment.appendChild(div);
        document.querySelector('#actors').innerHTML = '';
        document.querySelector('#actors').appendChild(fragment);
    };

    const renderPrice = (actor) => {
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');

        const template = `
                <div class="title topPad" id="price">
                    <span>Price : ${actor.amount}$</span>
                </div>
            `;

        div.innerHTML = template;
        fragment.appendChild(div);
        document.querySelector('#priceDIV').innerHTML = '';
        document.querySelector('#priceDIV').appendChild(fragment);
    };

    const button = document.querySelector('#compute');

    button.addEventListener('click', function onClick() {
        const car = VIRTUO.getCar();
        const begin = document.querySelector('#rental .js-begin').value;
        const end = document.querySelector('#rental .js-end').value;
        const distance = document.querySelector('#rental .js-distance').value;
        const option = document.querySelector('#rental .js-option').checked;
        const actors = VIRTUO.payActors(car, begin, end, distance, option);

        renderPrice(actors[0]);
        render(actors);
        var x = document.getElementById("target");
        x.style.display = "block";
        return;
    });
})();