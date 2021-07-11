var canvas = document.querySelector('canvas'),
c = canvas.getContext('2d');
canvas.width = 1900;
canvas.height = 800;

c.beginPath()
c.lineWidth = 8
c.moveTo(110, 0)
c.lineTo(110 ,684)
c.lineTo(1750 ,684)
c.stroke()

//document.getElementById("max").value

var y = [0, 0, 0, 0, 0]
create()
function create() {
    requestAnimationFrame(create)
    c.clearRect(0,0,2000,2000)
    c.beginPath()
    c.beginPath()
    c.lineWidth = 8
    c.moveTo(110, 0)
    c.lineTo(110 ,684)
    c.lineTo(1750 ,684)
    c.stroke()
    c.font = "20px arial"
    c.fillText(document.getElementById("max").value, 20, 20)
    c.font = "20px arial"
    c.fillText(0, 20, 690)
    
    for (var i = 1; i < 6; i ++) {
        y[i - 1] = lerp(y[i - 1], (-1 * document.getElementById(i.toString()).value), 0.01)
        c.fillStyle = document.getElementById("c" + i.toString()).value
        c.fillRect(150 + 200 * i - 200,680,90,  y[i - 1] /  document.getElementById("max").value * 684)
        c.fillText(document.getElementById("n" + i.toString()).value, 150 + 200 * i - 200, 710)
    }
    
}

function lerp(a, b, f) {
    return (a * (1 - f)) + (b * f);
}
