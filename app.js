
const plane = document.getElementById('msg-ico')
function fly() {
    // const newPlane = plane.cloneNode(true);
    // var coords = getAbsPosition(plane)
    // document.body.appendChild(newPlane)
    document.getElementById("msg-ico").className="msg-ico-active"
}

function getAbsPosition(element) {
    var rect = element.getBoundingClientRect();
    return { x: rect.left, y: rect.top }
}