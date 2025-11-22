let body = document.body;
let msg = document.querySelector('.display')
body.addEventListener('keydown', (dets) => {
    msg.innerHTML = dets.key;
    if (dets.key === " ") {

        msg.innerHTML = "SPACE"
    }
})
