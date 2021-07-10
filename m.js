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

function create() {
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
    //
    c.fillStyle = document.getElementById("c1").value
    c.fillRect(150,680,90, (-1 * document.getElementById("1").value) /  document.getElementById("max").value * 684)
    c.rect
    c.font = "20px arial"
    c.fillText(document.getElementById("n1").value, 150, 710)
    //
    c.fillStyle = document.getElementById("c2").value
    c.fillRect(350,680,90,(-1 * document.getElementById("2").value) /  document.getElementById("max").value * 684)
    c.rect
    c.font = "20px arial"
    c.fillText(document.getElementById("n2").value, 350, 710)
    //
    c.fillStyle = document.getElementById("c3").value
    c.fillRect(550,680,90,(-1 * document.getElementById("3").value) /  document.getElementById("max").value * 684)
    c.rect
    c.font = "20px arial"
    c.fillText(document.getElementById("n2").value, 550, 710)
    //
    c.fillStyle = document.getElementById("c4").value
    c.fillRect(750,680,90,(-1 * document.getElementById("4").value) /  document.getElementById("max").value * 684)
    c.rect
    c.font = "20px arial"
    c.fillText(document.getElementById("n4").value, 750, 710)
    //
    c.fillStyle = document.getElementById("c5").value
    c.fillRect(950,680,90,(-1 * document.getElementById("5").value) /  document.getElementById("max").value * 684)
    c.rect
    c.font = "20px arial"
    c.fillText(document.getElementById("n5").value, 950, 710)
    
}
