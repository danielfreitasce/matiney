
var equation = document.getElementById("equation");

function doDemo() {
    try {
        katex.render("\\sum_{i=1}^{n} (2i - 1) ", equation, {"displayMode":true});
    } catch (err) {

        console.log(err.message);
 
    }
}
doDemo();  

/**
 * Retorna o último termo ímpar
 * @param  n 
 * @returns height
 */
function getLastTerm(n){
    let h = 0;
    let j = 1

    for(let i = 0; i < n; i++){
        h = j; 
        j += 2;
    }
    return h; 
}
 
function showCircles(){
    const drawBox = document.getElementById("draw"); 
    
    while (drawBox.firstChild) {
        drawBox.removeChild(drawBox.firstChild);
    }

    const n = document.getElementById("n").value;

    let lastTerm = getLastTerm(n); 

    const diametro = 20; 
    let h = lastTerm * diametro; 
    let w = n * diametro;

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", w + diametro);
    svg.setAttribute("height", h + diametro + diametro + 10); 
    
    //desenhar circulos
    let cx = w; 
    let cy = h; 
    
    let lastTermAux = lastTerm
    for(let i = 0; i < n; i++){ 
        cy = h;
 
        let txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txt.appendChild(document.createTextNode(lastTermAux));

        txt.setAttribute("x", cx);
        txt.setAttribute("y", cy + diametro + 10);
        txt.setAttribute("dominant-baseline", "middle"); // Center text vertically
        txt.setAttribute("text-anchor", "middle");     // Center text horizontally
        
        svg.appendChild(txt);

        for(let c = 1; c <= lastTermAux; c++){

            let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx",cx);
            circle.setAttribute("cy",cy);
            circle.setAttribute("r", diametro/2);
            svg.appendChild(circle);

            cy -= diametro
        }
        cx -= diametro; 
        lastTermAux -= 2; 
    }

    drawBox.appendChild(svg);
    document.getElementById("total").innerText = "n = " +n + ".\n Total da soma dos n primeiros ímpares: " + n ** 2;
}
