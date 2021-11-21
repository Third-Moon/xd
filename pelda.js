function peldaProgram(){
    const szam = parseInt(prompt("Írj be egy pozitív egész számot, megmondom prím-e."));
    let prim = true;

if (szam === 1) {
    window.alert('Az 1 az nem prím szám.');
}

else if (szam > 1) {
    for (let i = 2; i < szam; i++) {
        if (szam % i == 0) {
            prim = false;
            break;
        }
    }
    if (prim) {
        window.alert('A(z) ' + szam + ' egy prím szám.');
    } else {
        window.alert('A(z) ' + szam +' nem egy prím szám.');
    }
}
}