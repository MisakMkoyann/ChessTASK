const field = document.querySelectorAll(`.field`);
const StartTry = document.querySelectorAll(`.button`);

// console.log(field);

const [
    a8,
    b8,
    c8,
    d8,
    e8,
    f8,
    g8,
    h8,
    a7,
    b7,
    c7,
    d7,
    e7,
    f7,
    g7,
    h7,
    a6,
    b6,
    c6,
    d6,
    e6,
    f6,
    g6,
    h6,
    a5,
    b5,
    c5,
    d5,
    e5,
    f5,
    g5,
    h5,
    a4,
    b4,
    c4,
    d4,
    e4,
    f4,
    g4,
    h4,
    a3,
    b3,
    c3,
    d3,
    e3,
    f3,
    g3,
    h3,
    a2,
    b2,
    c2,
    d2,
    e2,
    f2,
    g2,
    h2,
    a1,
    b1,
    c1,
    d1,
    e1,
    f1,
    g1,
    h1,
] = field;

const [
    start,
    tryagain,
] = StartTry;




if (tryagain) {
    tryagain.addEventListener("click", function() {
        // location.reload();
        window.location.reload();

    });
};


let x = 1;
let y = 8;

for (let i = 0; i < field.length; i++) {
    if (x > 8) {
        x = 1;
        y -= 1;
    };
    field[i].setAttribute(`pox`, x);
    field[i].setAttribute(`poy`, y);
    x += 1;
};




if (field) {
    for (let horseposition of field) {
        horseposition.addEventListener(`click`, function horse() {
            horseposition.classList.add(`horse`);
            horseposition.classList.add(`busyfield`);
            var positionx = parseInt(horseposition.getAttribute(`pox`));
            var positiony = parseInt(horseposition.getAttribute(`poy`));
            PosibleNextStep(positionx, positiony);

            if (start) {
                start.addEventListener("click", () => {

                });
            };
        });
    };

};


function PosibleNextStep(positionx, positiony) {

    let steps = [document.querySelector('[pox="' + (+parseInt(positionx) + 1) + '"][poy="' + (+parseInt(positiony) + 2) + '"]'),
        document.querySelector('[pox="' + (+parseInt(positionx) + 2) + '"][poy="' + (+parseInt(positiony) + 1) + '"]'),
        document.querySelector('[pox="' + (+parseInt(positionx) + 2) + '"][poy="' + (+parseInt(positiony) - 1) + '"]'),
        document.querySelector('[pox="' + (+parseInt(positionx) + 1) + '"][poy="' + (+parseInt(positiony) - 2) + '"]'),
        document.querySelector('[pox="' + (+parseInt(positionx) - 1) + '"][poy="' + (+parseInt(positiony) - 2) + '"]'),
        document.querySelector('[pox="' + (+parseInt(positionx) - 2) + '"][poy="' + (+parseInt(positiony) - 1) + '"]'),
        document.querySelector('[pox="' + (+parseInt(positionx) - 2) + '"][poy="' + (+parseInt(positiony) + 1) + '"]'),
        document.querySelector('[pox="' + (+parseInt(positionx) - 1) + '"][poy="' + (+parseInt(positiony) + 2) + '"]'),
    ];

    for (let i = steps.length - 1; i >= 0; i--) {
        if (!steps[i] || steps[i].classList.contains("busyfield")) {
            steps.splice(i, 1);
        };
    };
    // return steps;
    // console.log(steps);
    let nextsteps = [];

    function nextstep() {
        for (let i = 0; i < steps.length; i++) {
            let nextposx = steps[i].getAttribute(`pox`);
            let nextposy = steps[i].getAttribute(`poy`);
            let next = [document.querySelector('[pox="' + (+parseInt(nextposx) + 1) + '"][poy="' + (+parseInt(nextposy) + 2) + '"]'),
                document.querySelector('[pox="' + (+parseInt(nextposx) + 2) + '"][poy="' + (+parseInt(nextposy) + 1) + '"]'),
                document.querySelector('[pox="' + (+parseInt(nextposx) + 2) + '"][poy="' + (+parseInt(nextposy) - 1) + '"]'),
                document.querySelector('[pox="' + (+parseInt(nextposx) + 1) + '"][poy="' + (+parseInt(nextposy) - 2) + '"]'),
                document.querySelector('[pox="' + (+parseInt(nextposx) - 1) + '"][poy="' + (+parseInt(nextposy) - 2) + '"]'),
                document.querySelector('[pox="' + (+parseInt(nextposx) - 2) + '"][poy="' + (+parseInt(nextposy) - 1) + '"]'),
                document.querySelector('[pox="' + (+parseInt(nextposx) - 2) + '"][poy="' + (+parseInt(nextposy) + 1) + '"]'),
                document.querySelector('[pox="' + (+parseInt(nextposx) - 1) + '"][poy="' + (+parseInt(nextposy) + 2) + '"]'),
            ];
            for (let i = next.length - 1; i >= 0; i--) {
                if (!next[i] || next[i].classList.contains("busyfield")) {
                    next.splice(i, 1);
                };
            };
            nextsteps.push(next.length);
            // return nextsteps
        };
        console.log(nextsteps);
        return nextsteps;
    };
    nextsteps = nextstep();

    let s = nextsteps.length;
    let minoption = nextsteps[0];
    let si = 0;
    while (s--) {
        if (nextsteps[s] < minoption) {
            minoption = nextsteps[s];
            si = s;
        };
    };
    // console.log(si);

    document.querySelector(".horse").classList.remove("horse");
    steps[si].classList.add("horse");
    steps[si].classList.add("busyfield");

    steps[si].innerHTML = "X";
    positionx = steps[si].getAttribute(`pox`);
    positiony = steps[si].getAttribute(`poy`);
    // pos++
    // steps[si].innerHTML = pos
    // return nextsteps
};




// console.log(PosibleNextStep());