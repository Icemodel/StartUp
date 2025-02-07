// "use client";
// import { Canvas } from "@react-three/fiber";
// import { ARButton, XR } from "@react-three/xr";
// import XrHitModel from "./XrHitModel";

// const XrHitModelContainer = () => {
//   return (
//     <>
//       <ARButton
//         sessionInit={{
//           requiredFeatures: ["hit-test"],
//         }}
//       />
//       <Canvas>
//         <XR>
//           <XrHitModel />
//         </XR>
//       </Canvas>
//     </>
//   );
// };

// export default XrHitModelContainer;

// "use client";
// import { Canvas } from "@react-three/fiber";
// import { ARButton, XR } from "@react-three/xr";
// import { useState } from "react";
// import XrHitModel from "../ArModel/XrHitModel";

// const XrHitModelContainer = () => {
//   const [selectedModel, setSelectedModel] = useState("bed");

//   return (
//     <>
//       <div className="absolute top-4 left-4 z-10 flex gap-2">
//         {["bed", "table", "chair"].map((model) => (
//           <button
//             key={model}
//             className={`p-2 text-white rounded ${
//               selectedModel === model ? "bg-custom2" : ""
//             }`}
//             onClick={() => setSelectedModel(model)}
//           >
//             {model.charAt(0).toUpperCase() + model.slice(1)}
//           </button>
//         ))}
//       </div>

//       <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
//       <Canvas>
//         <XR>
//           <XrHitModel selectedModel={selectedModel} />
//         </XR>
//       </Canvas>
//     </>
//   );
// };

// export default XrHitModelContainer;

"use client";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useState } from "react";
import XrHitModel from "../ArModel/XrHitModel";

const XrHitModelContainer = () => {
  const [selectedModel, setSelectedModel] = useState("bed");

  return (
    <>
      {/* ปุ่มเลือกโมเดล */}
      <div className="absolute top-4 left-4 z-10 flex gap-4 p-2 bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
        {["bed", "table", "chair"].map((model) => (
          <button
            key={model}
            className={`px-4 py-2 text-lg font-semibold rounded-xl transition-all duration-300 shadow-md 
              ${
                selectedModel === model
                  ? "bg-custom1 text-white scale-105 shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-custom2 hover:text-white"
              }`}
            onClick={() => setSelectedModel(model)}
          >
            {model.charAt(0).toUpperCase() + model.slice(1)}
          </button>
        ))}
        <button className="px-4 py-2 text-lg font-semibold rounded-xl transition-all duration-300 shadow-md bg-gray-200 text-gray-800 hover:bg-custom1 hover:text-white">
          <a href="/" className="font-semibold">
            Back
          </a>
        </button>
      </div>

      <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />
      <Canvas>
        <XR>
          <XrHitModel selectedModel={selectedModel} />
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitModelContainer;
