// import { OrbitControls } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { Interactive, useHitTest, useXR } from "@react-three/xr";
// import { useRef, useState } from "react";
// import Model from "./Model";

// const XrHitModel = () => {
//   const reticleRef = useRef();
//   const [models, setModels] = useState([]);

//   const { isPresenting } = useXR();

//   useThree(({ camera }) => {
//     if (!isPresenting) {
//       camera.position.z = 3;
//     }
//   });

//   useHitTest((hitMatrix, hit) => {
//     hitMatrix.decompose(
//       reticleRef.current.position,
//       reticleRef.current.quaternion,
//       reticleRef.current.scale
//     );

//     reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
//   });

//   const placeModel = (e) => {
//     let position = e.intersection.object.position.clone();
//     let id = Date.now();
//     setModels([{ position, id }]);
//   };

//   return (
//     <>
//       <OrbitControls />
//       <ambientLight />
//       {isPresenting &&
//         models.map(({ position, id }) => {
//           return <Model key={id} position={position} />;
//         })}
//       {isPresenting && (
//         <Interactive onSelect={placeModel}>
//           <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
//             <ringGeometry args={[0.1, 0.25, 32]} />
//             <meshStandardMaterial color={"white"} />
//           </mesh>
//         </Interactive>
//       )}

//       {!isPresenting && <Model />}
//     </>
//   );
// };

// export default XrHitModel;

import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import BedModel from "@/app/ArModel/models/Bed";
import TableModel from "@/app/ArModel/models/Table";
import ChairModel from "@/app/ArModel/models/Chair";

const XrHitModel = ({ selectedModel }) => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([...models, { position, id, type: selectedModel }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />

      {isPresenting &&
        models.map(({ position, id, type }) => {
          let ModelComponent =
            type === "bed"
              ? BedModel
              : type === "table"
              ? TableModel
              : ChairModel;
          return <ModelComponent key={id} position={position} />;
        })}

      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting &&
        (selectedModel === "bed" ? (
          <BedModel />
        ) : selectedModel === "table" ? (
          <TableModel />
        ) : (
          <ChairModel />
        ))}
    </>
  );
};

export default XrHitModel;
