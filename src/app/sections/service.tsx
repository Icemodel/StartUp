import React from "react";
import Image from "next/image";

const service = () => {
  return (
    <section className="bg-custom2 text-custom1 pt-8 ">
      <div className=" text-center">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-lg mb-8">บริการทั้งหมดของพวกเรา</p>
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <div className="text-white justify-center place-items-center bg-stone-700">
            <Image
              src="/img/floorPlan.jpg"
              alt="Artificial Generated Floor Plan"
              className="rounded-lg mb-4 w-80 h-75 mt-10 object-fill"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-bold mb-2">
              Artificial Generated Floor Plan
            </h3>
            <p className="mb-8">ออกแบบแปลนบ้านของคุณด้วย AI</p>
          </div>
          <div className="text-white justify-center place-items-center bg-custom3">
            <Image
              src="/img/augmentedReality.png"
              alt="Augmented Reality Interior Simulation"
              className="rounded-lg mb-4 w-80 h-75 mt-10 object-fill"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-bold mb-2">
              Augmented Reality Interior Simulation
            </h3>
            <p className="mb-8">ทดลองวางเฟอร์นิเจอร์และของตกแต่งภายในบ้านของคุณ</p>
          </div>
          <div className="text-white justify-center place-items-center bg-custom4">
            <Image
              src="/img/consult.png"
              alt="Consultant Service And Interior Designing"
              className="rounded-lg mb-4 w-80 h-75 mt-10 object-fill"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-bold mb-2">
              Consultant Service And Interior Designing
            </h3>
            <p className="mb-8">
              บริการให้คำปรึกษาและออกแบบภายใน ตามงบประมาณที่คุณกำหนด
            </p>
          </div>
        </div>
        <button className="my-5 px-6 py-3 bg-custom1 text-white font-semibold rounded-lg">
          เรียนรู้เพิ่มเติม
        </button>
      </div>
    </section>
  );
};

export default service;
