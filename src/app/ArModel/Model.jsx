// // import React, { useRef } from "react";
// // import { useGLTF, useAnimations } from "@react-three/drei";

// // export default function Model(props) {
// //   const group = useRef();
// //   const { nodes, materials, animations } = useGLTF("/models/druid.gltf");
// //   const { actions } = useAnimations(animations, group);
// //   return (
// //     <group ref={group} {...props} dispose={null}>
// //       <group scale={1.91}>
// //         <primitive object={nodes.root} />
// //         <skinnedMesh
// //           geometry={nodes.druid.geometry}
// //           material={materials.color_main}
// //           skeleton={nodes.druid.skeleton}
// //         />
// //       </group>
// //     </group>
// //   );
// // }

// // useGLTF.preload("/models/druid.gltf");

// // import { useLoader } from "@react-three/fiber";
// // import { Suspense } from "react";
// // import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// // const Model = ({ position }) => {
// //   const gltf = useLoader(GLTFLoader, "/models/druid.gltf");
// //   return (
// //     <Suspense fallback={null}>
// //       <primitive position={position} object={gltf.scene} />
// //     </Suspense>
// //   );
// // };

// // export default Model;

// // Chair
// // import React, { useRef } from "react";
// // import { useGLTF } from "@react-three/drei";

// // export default function Model(props) {
// //   const group = useRef();
// //   const { nodes, materials } = useGLTF(
// //     "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf"
// //   );
// //   return (
// //     <group ref={group} {...props} dispose={null}>
// //       <mesh
// //         geometry={nodes.chair.geometry}
// //         material={materials["BrownDark.052"]}
// //       />
// //     </group>
// //   );
// // }

// // useGLTF.preload(
// //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf"
// // );

// // Table
// // import React, { useRef } from "react";
// // import { useGLTF } from "@react-three/drei";

// // export default function Model(props) {
// //   const group = useRef();
// //   const { nodes, materials } = useGLTF(
// //     "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table/model.gltf"
// //   );
// //   return (
// //     <group ref={group} {...props} dispose={null}>
// //       <mesh geometry={nodes.table.geometry} material={nodes.table.material}>
// //         <mesh geometry={nodes.legs.geometry} material={nodes.legs.material} />
// //         <mesh
// //           geometry={nodes.Plane002.geometry}
// //           material={nodes.Plane002.material}
// //         >
// //           <mesh
// //             geometry={nodes.Roundcube001.geometry}
// //             material={nodes.Roundcube001.material}
// //           >
// //             <mesh
// //               geometry={nodes.Roundcube002.geometry}
// //               material={nodes.Roundcube002.material}
// //             >
// //               <mesh
// //                 geometry={nodes.Roundcube003.geometry}
// //                 material={nodes.Roundcube003.material}
// //               />
// //             </mesh>
// //           </mesh>
// //         </mesh>
// //       </mesh>
// //     </group>
// //   );
// // }

// // useGLTF.preload(
// //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table/model.gltf"
// // );

// // Bed
// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export default function Model(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF(
//     "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bed/model.gltf"
//   );
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group scale={1.31}>
//         <mesh geometry={nodes.Cube004_1.geometry} material={materials.wood} />
//         <mesh
//           geometry={nodes.Cube004_2.geometry}
//           material={materials.Material}
//         />
//         <mesh
//           geometry={nodes.sheet.geometry}
//           material={materials["Material.006"]}
//           position={[0.02, 0.26, 0.18]}
//           scale={[1.22, 1.1, 1]}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload(
//   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bed/model.gltf"
// );
