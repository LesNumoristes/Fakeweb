
const plane = document.getElementById('msg-ico')
function fly() {
    // const newPlane = plane.cloneNode(true);
    // var coords = getAbsPosition(plane)
    // document.body.appendChild(newPlane)
    plane.className = "msg-ico-active"
    console.log('flying')
}

function getAbsPosition(element) {
    var rect = element.getBoundingClientRect();
    return { x: rect.left, y: rect.top }
}