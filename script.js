document.querySelectorAll(".panel").forEach((img) =>
{img.onclick = () => window.open(img.dataset.link, "_blank");
});

const world = document.getElementById("world");
let dragging = false;
let lastX = 0, lastY = 0;
let rx = -10, ry = 20;

world.style.setProperty("--rx", rx + "deg");
world.style.setProperty("--ry", ry + "deg");

window.onmousedown = (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY;};
window.onmouseup = () => { dragging = false;};

window.onmousemove = (e) => {
    if(!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;

    ry += dx * 0.3;
    rx -= dy * 0.3;

    world.style.setProperty("--rx", rx + "deg");
    world.style.setProperty("--ry", ry + "deg");
};