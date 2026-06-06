function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate() {

    const brand = document.getElementById("brand").value;
    const ram = document.getElementById("ram").value;

    const general = random(90, 100);
    const redDot = random(85, 100);
    const scope2x = random(75, 95);
    const scope4x = random(65, 85);
    const sniper = random(40, 65);
    const freeLook = 100;

    document.getElementById("result").innerHTML = `
        <h2>🔥 Your Sensitivity 🔥</h2>

        <p><b>Phone:</b> ${brand}</p>
        <p><b>RAM:</b> ${ram}</p>

        <hr><br>

        <p>General : ${general}</p>
        <p>Red Dot : ${redDot}</p>
        <p>2X Scope : ${scope2x}</p>
        <p>4X Scope : ${scope4x}</p>
        <p>Sniper Scope : ${sniper}</p>
        <p>Free Look : ${freeLook}</p>

        <br>
        <h3 style="color:lime;">✅ Headshot Ready</h3>
    `;
}
