import "../css/module/LandingBanner.css";
import * as THREE from "three";
import { useEffect } from "react";

function LandingBanner({ ver }) {
  useEffect(() => {
    if (ver === 2) {
      const canvas = document.querySelector("#c");
      const renderer = new THREE.WebGL1Renderer({
        canvas,
        alpha: true,
        antialias: true,
      });

      const fov = 75;
      const aspect = canvas.clientWidth / canvas.clientHeight;
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0d0d0d);

      {
        const color = 0xffffff;
        const skyColor = 0xffffff;
        const groundColor = 0x2e2e2e;
        const intensity = 1;

        const AmbientLight = new THREE.AmbientLight(color, 0.2);
        scene.add(AmbientLight);

        // const SpotLight = new THREE.SpotLight(color, 1, 100, 105);
        // SpotLight.position.set(1.5, -2, 5);
        // scene.add(SpotLight);

        const HemisphereLight = new THREE.HemisphereLight(
          skyColor,
          groundColor
        );
        scene.add(HemisphereLight);

        const DirectionalLight = new THREE.DirectionalLight(color, intensity);
        DirectionalLight.position.set(-1, 3, 4.5);
        scene.add(DirectionalLight);
      }

      const BoxGeometry = new THREE.BoxGeometry(1, 2, 1);
      const IcosahedronGeometry = new THREE.IcosahedronGeometry(0.5);

      const textureLoader = new THREE.TextureLoader();

      const mapImage = require("../textures/metal038_1k/metal038_1k_color.jpg");
      const map = textureLoader.load(
        mapImage.default,
        () => {
          console.log("map loaded");
        },
        () => {
          console.log("map loading");
        },
        (e) => {
          console.log("map error", e);
        }
      );

      const icosahedronMaterial = new THREE.MeshStandardMaterial({
        color: 0x5200ff,
        metalness: 0.5,
        roughness: 0.5,
      });
      const boxMaterial = new THREE.MeshStandardMaterial({
        color: 0x595959,
        map,
        metalness: 0.4,
        roughness: 0.2,
      });

      const box = new THREE.Mesh(BoxGeometry, boxMaterial);
      const icosahedron = new THREE.Mesh(
        IcosahedronGeometry,
        icosahedronMaterial
      );

      box.position.set(0, 0);
      box.position.z = -0.5;
      icosahedron.position.set(-0.75, 0.5);
      icosahedron.position.z = 0.2;

      scene.add(box);
      scene.add(icosahedron);

      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }

      let prevTime = 0;
      let icosahedronXPos = icosahedron.position.x;
      function render(time) {
        time *= 0.001;
        const deltaTime = time - prevTime;
        prevTime = time;

        const turningSpeed = 0.5;

        const canvas = renderer.domElement;
        const width = canvas.clientWidth;

        if (resizeRendererToDisplaySize(renderer)) {
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        const newXPos = -(width * 0.0007);

        if (Math.abs(newXPos - icosahedronXPos) > 0.05) {
          icosahedronXPos = icosahedron.position.x +=
            (newXPos - icosahedronXPos) * deltaTime;
          // icosahedronXPos = icosahedron.position.x;
        }

        icosahedron.position.y = Math.sin(time * 0.5) * 0.05 + 0.5;
        icosahedron.rotation.x +=
          Math.sin(time * 0.5) * turningSpeed * deltaTime;
        icosahedron.rotation.y +=
          Math.sin(time * 0.5) * turningSpeed * deltaTime;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    }
  }, [ver]);

  switch (ver) {
    case 1:
      return (
        <div className="LandingBanner_1">
          <div className="text_container">
            <h1 className="logo">MasterPic's</h1>
            <h5>Find everything for your Masterpiece</h5>
            <h3>개인작업을 위한 컨택트 및 포트폴리오 공유 서비스</h3>
          </div>

          <div className="background_container">
            <div className="box-gray" id="center-box"></div>
            <div className="circle-blue" id="top-left-circle"></div>
            <div className="categories">
              <div draggable className="category photographer">
                Photographer
              </div>
              <div draggable className="category stylist">
                Stylist
              </div>
              <div draggable className="category model">
                Model
              </div>
              <div draggable className="category hair-makeup">
                Hair&makeup
              </div>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="LandingBanner_2">
          <div className="text_container">
            <h1 className="logo">MasterPic's</h1>
            <h5>Find everything for your Masterpiece</h5>
            <h3>개인작업을 위한 컨택트 및 포트폴리오 공유 서비스</h3>
          </div>

          <div className="background_container">
            <div className="categories">
              <div draggable className="category photographer">
                Photographer
              </div>
              <div draggable className="category stylist">
                Stylist
              </div>
              <div draggable className="category model">
                Model
              </div>
              <div draggable className="category hair-makeup">
                Hair&makeup
              </div>
            </div>
          </div>

          <canvas id="c"></canvas>
        </div>
      );
    default:
      return <></>;
  }
}

export default LandingBanner;
