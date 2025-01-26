import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

const service = () => {
  return (
    <div className="font-roboto">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen text-center text-white bg-[url(/img/ServicePicture.jpg)]">
        <h1 className="text-4xl md:text-8xl font-bold italic flex pt-55 pl-18">
          Services
        </h1>
      </div>
      <div className="flex-1 items-center justify-center bg-custom2">
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-lg md:text-3xl font-bold text-center text-custom1 pb-5">
            OUR SERVICES
          </h2>
          <p className="text-base text-center text-wrap leading-7">
            ที่ Home Tech เราเป็นผู้บุกเบิกการออกแบบบ้านตามสั่ง <br />
            เราผสมผสานการตกแต่งภายในเข้ากับสถาปัตยกรรม
            <br />
            เรามุ่งหวังบ้านที่มีนวัตกรรมการออกแบบภายนอกและใส่ใจในรายละเอียดภายใน
            <br />
            เรารวบรวมความเชี่ยวชาญของเรามามากกว่า 8 ปี
            ด้วยการทำงานอย่างใกล้ชิดกับเจ้าของ
            <br />
            ทำให้มั่นใจได้ว่าการออกแบบจะได้รับการปรับแต่งให้เหมาะกับบ้านของลูกค้าแต่ละราย
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-custom1 w-full h-75% p-10">
        {/* <Image
          src="/img/floorPlan.jpg"
          alt="floorPlan"
          className="w-full h-full"s
          width={500}
          height={500}
        /> */}
        <div className="bg-cover bg-center h-full text-center text-white bg-[url(img/floorPlan.jpg]">
          AI Generate Floor Plan
        </div>
        <Image
          src="/img/VR.png"
          alt="VR"
          className="w-full h-full"
          width={500}
          height={500}
        />
        <Image
          src="/img/consult.png"
          alt="consult"
          className="w-full h-full"
          width={500}
          height={500}
        />
        <Image
          src="/img/augmentedReality.png"
          alt="AR"
          className="w-full h-full"
          width={500}
          height={500}
        />
      </div>
      <Footer />
    </div>
  );
};

export default service;
