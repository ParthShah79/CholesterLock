const filled = document.guerySelector('.filled');

function undate () {
    filled.style.width = '${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)*100)}% '
   requestAnimationFrame(update);
}

update();