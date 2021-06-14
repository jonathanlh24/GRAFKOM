let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);
let renderer = new THREE.WebGLRenderer({
    antialias: true
});

scene.background = new THREE.Color('#fafafa');
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

cam.position.z = 50;
cam.position.y = 30;

let loader = new THREE.GLTFLoader();
loader.load("Virus-1/scene.gltf",function(gltf){
    virus_1 = gltf.scene;
    virus_1.scale.set(0.1,0.1,0.1);
    scene.add(virus_1);
});


let controls = new THREE.OrbitControls(cam, renderer.domElement);

// Point Light
var pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(0, 2, 2);
scene.add(pointLight);
// Point Light Helper
scene.add(new THREE.PointLightHelper(pointLight, 2.0, 0xff0000));

// Controller
document.addEventListener('keydown', function (event) {
    // ATAS = W
    if (event.keyCode == 87) {
        ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
        imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

        console.log("W");
        console.log(array);
        array = translasi_array(array, { x: 0, y: - 10 });
        Polygon(imageDataSaya, array, 0, 0, 0);
        ctx.putImageData(imageDataSaya, 0, 0);
    }

    // KIRI = A
    else if (event.keyCode == 65) {
        ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
        imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

        console.log("A");
        console.log(array);
        array = translasi_array(array, { x: - 10, y: 0 });
        Polygon(imageDataSaya, array, 0, 0, 0);
        ctx.putImageData(imageDataSaya, 0, 0);
    }

    // BAWAH = S
    else if (event.keyCode == 83) {
        ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
        imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

        console.log("S");
        console.log(array);
        array = translasi_array(array, { x: 0, y: 10 });
        Polygon(imageDataSaya, array, 0, 0, 0);
        ctx.putImageData(imageDataSaya, 0, 0);
    }

    // KANAN = D
    else if (event.keyCode == 68) {
        ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
        imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

        console.log("D");
        console.log(array);
        array = translasi_array(array, { x: 10, y: 0 });
        Polygon(imageDataSaya, array, 0, 0, 0);
        ctx.putImageData(imageDataSaya, 0, 0);
    }

    // ROTATE KIRI = Q
    else if (event.keyCode == 81) {
        ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
        imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

        console.log("Q");
        console.log(array);
        array = rotasi_array(array, array[3], 0.1);
        Polygon(imageDataSaya, array, 0, 0, 0);
        ctx.putImageData(imageDataSaya, 0, 0);
    }

    // ROTATE KANAN= E
    else if (event.keyCode == 69) {
        ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
        imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

        console.log("E");
        console.log(array);
        array = rotasi_array(array, array[3], - 0.1);
        Polygon(imageDataSaya, array, 0, 0, 0);
        ctx.putImageData(imageDataSaya, 0, 0);
    }

    // SCALE BESAR = Z
    else if (event.keyCode == 90) {
        ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
        imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

        console.log("Z");
        console.log(array);
        array = skala_array(array, array[3], { x: 1.5, y: 1.5 });
        Polygon(imageDataSaya, array, 0, 0, 0);
        ctx.putImageData(imageDataSaya, 0, 0);
    }

    // SCALE KECIL = C 
    else if (event.keyCode == 67) {
        ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);
        imageDataSaya = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

        console.log("C");
        console.log(array);
        array = skala_array(array, array[3], { x: 1 / 2, y: 1 / 2 });
        Polygon(imageDataSaya, array, 0, 0, 0);
        ctx.putImageData(imageDataSaya, 0, 0);
    }
})

function draw() {
    requestAnimationFrame(draw);
    renderer.render(scene, cam);
}

draw();