let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);
let renderer = new THREE.WebGLRenderer({
    antialias: true
});

scene.background = new THREE.Color('0xfafafa');
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

cam.position.z = 25;
cam.position.y = 10;


let virus_loader1 = new THREE.GLTFLoader();
virus_loader1.load("Virus-1/scene.gltf",function(gltf){
    virus_1 = gltf.scene;
    virus_1.scale.set(0.005,0.005,0.005);
    virus_1.position.set(0,1,0);
    scene.add(virus_1);
});

let loader = new THREE.GLTFLoader();
loader.load("Person/scene.gltf",function(gltf){
    person = gltf.scene;
    person.scale.set(0.01,0.01,0.01);
    person.position.set(0,0.1,10);
    scene.add(person);
});


let controls = new THREE.OrbitControls(cam, renderer.domElement);

const plane = new THREE.PlaneGeometry(30,30,1);
const grass_texture = new THREE.TextureLoader().load('./texture/rumput.jpg');

const mat_rumput = new THREE.MeshPhongMaterial({
    map:grass_texture
});

let mesh_plane = new THREE.Mesh(plane,mat_rumput);
mesh_plane.position.set(0,0,0);
scene.add(mesh_plane);
mesh_plane.rotation.x-=Math.PI/2;

//LIGHT
let light1 = new THREE.PointLight(0xffffff,0.5);
light1.position.set(-15,15,-15);
scene.add(light1);
scene.add(new THREE.PointLightHelper(light1, 1.0, 0x0000ff));

let light2 = new THREE.PointLight(0xffffff,0.5);
light2.position.set(-15,15,15);
scene.add(light2);
scene.add(new THREE.PointLightHelper(light2, 1.0, 0x0000ff));

let light3 = new THREE.PointLight(0xffffff,0.5);
light3.position.set(15,15,15);
scene.add(light3);
scene.add(new THREE.PointLightHelper(light3, 1.0, 0x0000ff));

let light4 = new THREE.PointLight(0xffffff,0.5);
light4.position.set(15,15,-15);
scene.add(light4);
scene.add(new THREE.PointLightHelper(light4, 1.0, 0x0000ff));

let light5 = new THREE.PointLight(0xffffff,0.5);
light5.position.set(15,-15,15);
scene.add(light5);
scene.add(new THREE.PointLightHelper(light5, 1.0, 0x0000ff));

let light6 = new THREE.PointLight(0xffffff,0.5);
light6.position.set(15,-15,-15);
scene.add(light6);
scene.add(new THREE.PointLightHelper(light6, 1.0, 0x0000ff));

let light7 = new THREE.PointLight(0xffffff,0.5);
light7.position.set(-15,-15,15);
scene.add(light7);
scene.add(new THREE.PointLightHelper(light7, 1.0, 0x0000ff));

let light8 = new THREE.PointLight(0xffffff,0.5);
light8.position.set(-15,-15,-15);
scene.add(light8);
scene.add(new THREE.PointLightHelper(light8, 1.0, 0x0000ff));


// Controller
let posisi='depan'
document.addEventListener('keydown', function (event) {
    // ATAS = W
    if (event.keyCode == 87) {
        console.log("W");
        person.position.z-=1.5;
        
    }

    // KIRI = A
    else if (event.keyCode == 65) {
        console.log("A");
        person.position.x-=1.5;
        
    }

    // BAWAH = S
    else if (event.keyCode == 83) {
        console.log("S");
        person.position.z+=1.5;
        
    }

    // KANAN = D
    else if (event.keyCode == 68) {
        console.log("D");
        person.position.x+=1.5;
        
    }

    // ROTATE KIRI = Q
    else if (event.keyCode == 81) {
        person.rotation.y-=Math.PI/2;
        console.log(person.rotation.y);
    }

    // ROTATE KANAN= E
    else if (event.keyCode == 69) {
        person.rotation.y+=Math.PI/2;
        console.log(person.rotation.y);
    }
})

function draw() {
    requestAnimationFrame(draw);
    renderer.render(scene, cam);
}

draw();