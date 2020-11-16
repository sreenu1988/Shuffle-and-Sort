    let max = 9
    let positions = [];
    function sort() {
        for (let i = 1; i <= max; i++) {        
            updateDOM(i, i);
        }
    }
    function shuffle() {
        positions = [];
        updatePositions();
    }
    function updatePositions(){
        for (let i = 1; i <= max; i++) {
            let positionTaken = false;
            do {
                let random = Math.floor(Math.random() * max) + 1;
                positionTaken = positions.indexOf(random) !== -1
                if (!positionTaken) {
                    positions.push(random);
                }
            } while (positionTaken);
            updateDOM(i, positions[i-1]);
        }
    }
    function updateDOM(elPos, Num){
        let el = document.getElementById(elPos);
        el.removeAttribute('class');
        let clsName = "cell" + elPos + " box" + Num;
        el.className = clsName;
        el.innerHTML = Num;
    }
	
