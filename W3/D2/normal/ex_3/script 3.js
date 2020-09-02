function getVolume() {
    var radius = document.getElementById("radius").value;
    console.log("radius: " + radius);
    let volume;

    radius = Math.abs(radius);
    volume = (4 / 3 * Math.PI * radius ** 3) / 3;
    volume = volume.toFixed(2);
    console.log("volume: " + volume);
    document.getElementById("volume").value = volume
    return false;
}


window.onload = document.getElementById("MyForm").onsubmit = getVolume;