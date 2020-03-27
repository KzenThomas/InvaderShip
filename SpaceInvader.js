document.onkeydown = checkKey

window.onload = setInterval(moveLaser, 100)

var laserarray = []

function windowWidth() {
    return window.innerWidth
}

function windowHeight() {
    return window.innerHeight
}

function checkKey(e) {

    e = e || window.event;
    var keycode = e.keyCode;
    var stringcode = String.fromCharCode(keycode);
    let image = document.getElementById('raket')
    let imageComputed = getComputedStyle(image)
    let imageLeft = parseInt(imageComputed.left)
    let imageRight = Math.abs(parseInt(imageComputed.right))

    moveImage(keycode, imageLeft, imageRight)
}

function moveImage(keycode, imageLeft, imageRight) {
    if (keycode == 37 && imageLeft > 0) {
        document.getElementById('raket').style.left = imageLeft - 10 + "px"
    }
    if (keycode == 39 && imageRight < windowWidth() - 100) {
        document.getElementById('raket').style.left = imageLeft + 10 + "px"
    }
    if (keycode == 32) {
        showLaser(imageLeft)
    }
}

function showLaser(imageLeft) {
    var laser = document.createElement('IMG')
    laser.src = 'beam.png'
    laser.style.position = "fixed"
    laser.style.left = imageLeft + 27 + "px"
    laser.style.bottom = "20px"
    laserarray.push(laser)
    document.getElementById('rakett').appendChild(laser)
}

function moveLaser() {
    var windowhigh = windowHeight();
    laserarray.forEach(function (item, index) {
        item.style.bottom = parseInt(item.style.bottom) + 20 + "px"
        if (parseInt(item.style.bottom) > windowhigh) {
            laserarray.splice(index, index) 
        }
        checkHit(item, index)
    })
}

function checkHit(item, index) {
    var afstandxlasertotvijand1 = parseInt(document.getElementById('Alienufo1').style.left + item.style.left)
    var afstandylasertotvijand1 = parseInt(document.getElementById('Alienufo1').style.bottom + item.style.bottom)
    if (afstandxlasertotvijand1 <= 77 && afstandylasertotvijand1 > 600) {
        createExplosie1(item)
    }
    var afstandxlasertotvijand1 = parseInt(document.getElementById('Alienufo2').style.left + item.style.left)
    var afstandylasertotvijand1 = parseInt(document.getElementById('Alienufo2').style.bottom + item.style.bottom)
    if (afstandxlasertotvijand1 <= 77 && afstandylasertotvijand1 > 600) {
        createExplosie1(item)
    }
    var afstandxlasertotvijand1 = parseInt(document.getElementById('Alienufo3').style.left + item.style.left)
    var afstandylasertotvijand1 = parseInt(document.getElementById('Alienufo3').style.bottom + item.style.bottom)
    if (afstandxlasertotvijand1 <= 77 && afstandylasertotvijand1 > 600) {
        createExplosie1(item)
    }   
}

function createExplosie1(item) {
    document.getElementById('Alienufo1').style.display = "none"
    item.style.display = "none"
     document.getElementById('Alienufo2').style.display = "none"
    item.style.display = "none"
     document.getElementById('Alienufo3').style.display = "none"
    item.style.display = "none"
    document.getElementById('explosie').style.display = "block"
    setTimeout(function () {
        document.getElementById('explosie').style.display = "none"
    }, 900)

}