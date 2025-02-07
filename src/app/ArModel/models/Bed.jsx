import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bed/model.gltf"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.31}>
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.wood} />
        <mesh
          geometry={nodes.Cube004_2.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.sheet.geometry}
          material={materials["Material.006"]}
          position={[0.02, 0.26, 0.18]}
          scale={[1.22, 1.1, 1]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bed/model.gltf"
);
