
let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);
let renderer = new THREE.WebGLRenderer({
    antialias: true
});

scene.background = new THREE.Color(0x000000);
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

cam.position.z = 30;
cam.position.y = 15;

const color = new THREE.Color(0x00ff00);

let virus_loader1 = new THREE.GLTFLoader();
virus_loader1.load("Virus-1/scene.gltf", function (gltf) {
    virus_1 = gltf.scene;
    virus_1.scale.set(0.01, 0.01, 0.01);
    virus_1.position.set(0, 1, 10);
    scene.add(virus_1);
});

let virus_loader2 = new THREE.GLTFLoader();
virus_loader2.load("Virus-1/scene.gltf", function (gltf) {
    virus_2 = gltf.scene;
    virus_2.scale.set(0.01, 0.01, 0.01);
    virus_2.position.set(0, 1, 5);
    scene.add(virus_2);
});

let virus_loader3 = new THREE.GLTFLoader();
virus_loader3.load("Virus-1/scene.gltf", function (gltf) {
    virus_3 = gltf.scene;
    virus_3.scale.set(0.01, 0.01, 0.01);
    virus_3.position.set(0, 1, 0);
    scene.add(virus_3);
});

let virus_loader4 = new THREE.GLTFLoader();
virus_loader4.load("Virus-1/scene.gltf", function (gltf) {
    virus_4 = gltf.scene;
    virus_4.scale.set(0.01, 0.01, 0.01);
    virus_4.position.set(0, 1, -5);
    scene.add(virus_4);
});

let loader = new THREE.GLTFLoader();
loader.load("Person/scene.gltf", function (gltf) {
    person = gltf.scene;
    person.scale.set(0.01, 0.01, 0.01);
    person.position.set(0, 0.1, 13);
    scene.add(person);
});


let controls = new THREE.OrbitControls(cam, renderer.domElement);

const plane = new THREE.PlaneGeometry(30, 30, 1);
const checkpoint = new THREE.PlaneGeometry(30, 5, 5);
const tanah = new THREE.BoxGeometry(30, 30, 30);

const grass_texture = new THREE.TextureLoader().load('./texture/rumput.jpg');
const tanah_texture = new THREE.TextureLoader().load('./texture/tanah.jpg');

const mat_checkpoint = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});

const mat_tanah = new THREE.MeshPhongMaterial({
    map: tanah_texture
});

const mat_rumput = new THREE.MeshPhongMaterial({
    map: grass_texture
});

let mesh_checkpoint = new THREE.Mesh(checkpoint, mat_checkpoint);
mesh_checkpoint.position.set(0, 0.05, -12.5);
scene.add(mesh_checkpoint);
mesh_checkpoint.rotation.x -= Math.PI / 2;

let mesh_plane = new THREE.Mesh(plane, mat_rumput);
mesh_plane.position.set(0, 0, 0);
scene.add(mesh_plane);
mesh_plane.rotation.x -= Math.PI / 2;

let mesh_tanah = new THREE.Mesh(tanah, mat_tanah);
mesh_tanah.position.set(0, -15.01, 0);
scene.add(mesh_tanah);

//LIGHT
let light1 = new THREE.PointLight(0xffffff, 0.5);
light1.position.set(-15, 15, -15);
scene.add(light1);
scene.add(new THREE.PointLightHelper(light1, 1.0, 0x0000ff));

let light2 = new THREE.PointLight(0xffffff, 0.5);
light2.position.set(-15, 15, 15);
scene.add(light2);
scene.add(new THREE.PointLightHelper(light2, 1.0, 0x0000ff));

let light3 = new THREE.PointLight(0xffffff, 0.5);
light3.position.set(15, 15, 15);
scene.add(light3);
scene.add(new THREE.PointLightHelper(light3, 1.0, 0x0000ff));

let light4 = new THREE.PointLight(0xffffff, 0.5);
light4.position.set(15, 15, -15);
scene.add(light4);
scene.add(new THREE.PointLightHelper(light4, 1.0, 0x0000ff));

let light5 = new THREE.PointLight(0xffffff, 0.5);
light5.position.set(15, -15, 15);
scene.add(light5);
scene.add(new THREE.PointLightHelper(light5, 1.0, 0x0000ff));

let light6 = new THREE.PointLight(0xffffff, 0.5);
light6.position.set(15, -15, -15);
scene.add(light6);
scene.add(new THREE.PointLightHelper(light6, 1.0, 0x0000ff));

let light7 = new THREE.PointLight(0xffffff, 0.5);
light7.position.set(-15, -15, 15);
scene.add(light7);
scene.add(new THREE.PointLightHelper(light7, 1.0, 0x0000ff));

let light8 = new THREE.PointLight(0xffffff, 0.5);
light8.position.set(-15, -15, -15);
scene.add(light8);
scene.add(new THREE.PointLightHelper(light8, 1.0, 0x0000ff));

let light9 = new THREE.PointLight(0xffffff, 0.5); //front center
light9.position.set(0, 0, 30);
scene.add(light9);
scene.add(new THREE.PointLightHelper(light9, 1.0, 0x0000ff));

let light10 = new THREE.PointLight(0xffffff, 0.5); //back center
light10.position.set(0, 0, -30);
scene.add(light10);
scene.add(new THREE.PointLightHelper(light8, 1.0, 0x0000ff));

let light11 = new THREE.PointLight(0xffffff, 0.5); //left
light11.position.set(-30, 0, 0);
scene.add(light11);
scene.add(new THREE.PointLightHelper(light8, 1.0, 0x0000ff));

let light12 = new THREE.PointLight(0xffffff, 0.5); //right
light12.position.set(30, 0, 0);
scene.add(light12);
scene.add(new THREE.PointLightHelper(light8, 1.0, 0x0000ff));

var person = new THREE.Object3D();
var virus_1 = new THREE.Object3D();
var virus_2 = new THREE.Object3D();
var virus_3 = new THREE.Object3D();
var virus_4 = new THREE.Object3D();

// Controller
document.addEventListener('keydown', function (event) {
    // ATAS = W
    if (event.keyCode == 87) {
        console.log("W");
        person.position.z -= 1;
    }

    // KIRI = A
    else if (event.keyCode == 65) {
        console.log("A");
        person.position.x -= 1;
    }

    // BAWAH = S
    else if (event.keyCode == 83) {
        console.log("S");
        person.position.z += 1;
    }

    // KANAN = D
    else if (event.keyCode == 68) {
        console.log("D");
        person.position.x += 1;
    }

    // ROTATE KIRI = Q
    else if (event.keyCode == 81) {
        person.rotation.y += Math.PI / 2;
        console.log(person.rotation.y);
    }

    // ROTATE KANAN= E
    else if (event.keyCode == 69) {
        person.rotation.y -= Math.PI / 2;
        console.log(person.rotation.y);
    }
})

let checker = "kanan";
let checker2 = "kanan";
let checker3 = "kanan";
let checker4 = "kanan";

function draw() {

    if (person.position.x > 15 || person.position.x < -15 || person.position.z > 15 || person.position.z < -15) {
        alert("GAME OVER");
        location.reload();
    } else if (person.position.z <= -11) {
        alert("CHECK POINT")
        location.reload();
    }
    else {
        requestAnimationFrame(draw);
        renderer.render(scene, cam);

        let posisi = virus_1.position.x;
        if (checker == "kanan") {
            if (posisi > 10) {
                checker = "kiri";
            } else {
                virus_1.position.x += 0.2;
            }
        } else if (checker == "kiri") {
            if (posisi < -10) {
                checker = "kanan";
            } else {
                virus_1.position.x -= 0.2;
            }
        }

        let posisi2 = virus_2.position.x;
        if (checker2 == "kanan") {
            if (posisi2 > 10) {
                checker2 = "kiri";
            } else {
                virus_2.position.x += 0.3;
            }
        } else if (checker2 == "kiri") {
            if (posisi2 < -10) {
                checker2 = "kanan";
            } else {
                virus_2.position.x -= 0.3;
            }
        }

        let posisi3 = virus_3.position.x;
        if (checker3 == "kanan") {
            if (posisi3 > 10) {
                checker3 = "kiri";
            } else {
                virus_3.position.x += 0.4;
            }
        } else if (checker3 == "kiri") {
            if (posisi3 < -10) {
                checker3 = "kanan";
            } else {
                virus_3.position.x -= 0.4;
            }
        }

        let posisi4 = virus_4.position.x;
        if (checker4 == "kanan") {
            if (posisi4 > 10) {
                checker4 = "kiri";
            } else {
                virus_4.position.x += 0.5;
            }
        } else if (checker4 == "kiri") {
            if (posisi4 < -10) {
                checker4 = "kanan";
            } else {
                virus_4.position.x -= 0.5;
            }
        }
        console.log(checker)
    }
}

draw();