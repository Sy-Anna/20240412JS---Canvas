document.addEventListener("DOMContentLoaded", ()=>{
    /**
     * @type {HTMLCanvasElement}
     */
    const rajzlap = document.getElementById("rajzlap");
    const rajzfelulet = rajzlap.getContext("2d");
    rajzfelulet.fillStyle = "green";
    rajzfelulet.fillRect(10, 10, 150, 100);
    rajzfelulet.fillStyle="black";
    //--vonal kezdőpont
    rajzfelulet.moveTo(0,0);
    //--végpont koordinátái
    rajzfelulet.lineTo(200,300);
    //--összekötjük a pontokat
    rajzfelulet.stroke();
    //--ellipszis
    rajzfelulet.beginPath();
    rajzfelulet.strokeStyle="yellow";
    rajzfelulet.arc(40,40,30,0,2 * Math.PI*2);
    rajzfelulet.stroke();
})