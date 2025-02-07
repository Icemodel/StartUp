import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table/model.gltf"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.table.geometry} material={nodes.table.material}>
        <mesh geometry={nodes.legs.geometry} material={nodes.legs.material} />
        <mesh
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
        >
          <mesh
            geometry={nodes.Roundcube001.geometry}
            material={nodes.Roundcube001.material}
          >
            <mesh
              geometry={nodes.Roundcube002.geometry}
              material={nodes.Roundcube002.material}
            >
              <mesh
                geometry={nodes.Roundcube003.geometry}
                material={nodes.Roundcube003.material}
              />
            </mesh>
          </mesh>
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/table/model.gltf"
);
