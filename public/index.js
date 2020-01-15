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

(() => {
    const render = (actors) => {
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');
        const template = actors.map(actor => {
            return `
        <div class="actor col s6 center">
          <span>${actor.who}</span>
          <span>${actor.type}</span>
          <span>${actor.amount}</span>
        </div>
      `;
        }).join('');

        div.innerHTML = template;
        fragment.appendChild(div);
        document.querySelector('#actors').innerHTML = '';
        document.querySelector('#actors').appendChild(fragment);
    };

    const button = document.querySelector('#compute');

    button.addEventListener('click', function onClick() {
        const car = VIRTUO.getCar();
        const begin = document.querySelector('#rental .js-begin').value;
        const end = document.querySelector('#rental .js-end').value;
        const distance = document.querySelector('#rental .js-distance').value;
        const option = document.querySelector('#rental .js-option').checked;
        const actors = VIRTUO.payActors(car, begin, end, distance, option);

        render(actors);
        var x = document.getElementById("actors");
        x.style.display = "inline-block";
        return;
    });
})();