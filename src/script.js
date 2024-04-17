import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";

const scene = new THREE.Scene();
const group = new THREE.Group();
scene.add(group);

const loadingManager = new THREE.LoadingManager();

const textureLoader = new THREE.TextureLoader(loadingManager);

const about = textureLoader.load(
  "/pages/1.jpg",
  () => {
    console.log("Load finished for about");
  },
  (xhr) => {
    console.log("Progress for about: " + (xhr.loaded / xhr.total) * 100 + "%");
  },
  (error) => {
    console.log("Error loading about texture: " + error);
  }
);

const moreInfo = textureLoader.load(
  "/pages/2.jpg",
  () => {
    console.log("Load finished for moreInfo");
  },
  (xhr) => {
    console.log(
      "Progress for moreInfo: " + (xhr.loaded / xhr.total) * 100 + "%"
    );
  },
  (error) => {
    console.log("Error loading moreInfo texture: " + error);
  }
);

const gettingStarted = textureLoader.load(
  "/pages/3.jpg",
  () => {
    console.log("Load finished for gettingStarted");
  },
  (xhr) => {
    console.log(
      "Progress for gettingStarted: " + (xhr.loaded / xhr.total) * 100 + "%"
    );
  },
  (error) => {
    console.log("Error loading gettingStarted texture: " + error);
  }
);

const usedBy = textureLoader.load(
  "/pages/4.jpg",
  () => {
    console.log("Load finished for usedBy");
  },
  (xhr) => {
    console.log("Progress for usedBy: " + (xhr.loaded / xhr.total) * 100 + "%");
  },
  (error) => {
    console.log("Error loading usedBy texture: " + error);
  }
);

const wikis = textureLoader.load(
  "/pages/5.jpg",
  () => {
    console.log("Load finished for wikis");
  },
  (xhr) => {
    console.log("Progress for wikis: " + (xhr.loaded / xhr.total) * 100 + "%");
  },
  (error) => {
    console.log("Error loading wikis texture: " + error);
  }
);

const more = textureLoader.load(
  "/pages/6.jpg",
  () => {
    console.log("Load finished for more");
  },
  (xhr) => {
    console.log("Progress for more: " + (xhr.loaded / xhr.total) * 100 + "%");
  },
  (error) => {
    console.log("Error loading more texture: " + error);
  }
);

const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
const sides = [about, moreInfo, gettingStarted, usedBy, wikis, more];
const materials = sides.map(
  (texture) => new THREE.MeshBasicMaterial({ map: texture })
);
const cube = new THREE.Mesh(geometry, materials);

group.add(cube);

cube.rotation.y = 15;
cube.rotation.x = 0.5;

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const controls = new OrbitControls(camera, document.querySelector(".webgl"));
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Animation
const allSides = document.querySelectorAll("h3");

allSides.forEach((h3, index) => {
  h3.addEventListener("click", () => {
    if (index === 0) {
      gsap.to(cube.rotation, {
        y: Math.PI * 0.5,
      });
    } else if (index === 1) {
      gsap.to(cube.rotation, {
        y: Math.PI,
      });
    } else if (index === 2) {
      gsap.to(cube.rotation, {
        y: Math.PI * 1.5,
      });
    } else if (index === 3) {
      gsap.to(cube.rotation, {
        y: Math.PI * 2,
      });
    } else if (index === 4) {
      gsap.to(cube.rotation, {
        x: Math.PI * 0.5,
      });
    } else if (index === 5) {
      gsap.to(cube.rotation, {
        x: -Math.PI * 0.5,
      });
    }
  });
});

const tick = () => {
  requestAnimationFrame(tick);
  controls.update();
  renderer.render(scene, camera);
};
tick();

//Background
VANTA.TOPOLOGY({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: window.innerHeight,
  minWidth: window.innerWidth,
  scale: 0.0,
  scaleMobile: 1.0,
  color: 0x454545,
  backgroundColor: 0xf5f5f5,
});
