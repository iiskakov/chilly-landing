import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {useGLTF, Environment, OrbitControls} from "@react-three/drei";
import {Leva, useControls} from "leva";

function Suzi(props) {
  const {nodes} = useGLTF("/chili7.glb");
  const materialProps = useControls({
    thickness: {value: 5, min: 0, max: 20},
    roughness: {value: 1, min: 0, max: 1, step: 0.1},
    clearcoat: {value: 1, min: 0, max: 1, step: 0.1},
    clearcoatRoughness: {value: 0, min: 0, max: 1, step: 0.1},
    transmission: {value: 1, min: 0.9, max: 1, step: 0.01},
    ior: {value: 1.25, min: 1, max: 2.3, step: 0.05},
    envMapIntensity: {value: 15, min: 0, max: 100, step: 1},
    color: "#ffffff",
    attenuationTint: "#ffe79e",
    attenuationDistance: {value: 0, min: 0, max: 1},
  });
  return (
    <mesh geometry={nodes.Piment_keychain.geometry} {...props}>
      <meshPhysicalMaterial {...materialProps} />
    </mesh>
  );
}

export default function Suzanne() {
  const envProps = useControls({background: false});
  return (
    <>
      <Leva hidden />
      <Canvas
        className="min-h-screen fixed inset-0"
        style={{position: "fixed", zIndex: "-1"}}
        dpr={[1, 2]}
        camera={{position: [0, 0, 2.5]}}
        gl={{alpha: false}}
      >
        <color attach="background" args={["#"]} />
        <Suspense fallback={null}>
          <Suzi />
          <Environment {...envProps} files="adams_place_bridge_1k.hdr" />
          <group rotation={[0, 0, Math.PI / 4]}>
            {/* <mesh position={[0, 0, -10]} material-color="#b41d1d"> */}
            {/*   <planeGeometry args={[20, 2]} /> */}
            {/* </mesh> */}
            <mesh position={[0, 0, -10]} material-color="crimson">
              <planeGeometry args={[2, 20]} />
            </mesh>
          </group>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}
