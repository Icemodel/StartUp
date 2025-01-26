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
        <h1 className="text-2xl md:text-7xl font-bold italic pt-55 pl-18 absolute hidden md:block">
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
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 bg-custom1 p-10">
        <div className="bg-cover bg-center h-screen w-full bg-[url(/img/floorPlan.jpg)] ">
          <div className="text-start text-custom1 text-8xl font-bold pl-10 pt-10">
            AI Generate <br />
            Floor Plan
          </div>
        </div>
        <div className="bg-cover bg-center h-screen w-full bg-[url(/img/VR.png)] ">
          <div className="text-start text-white text-9xl font-bold pl-10 pt-10">
            VR
          </div>
        </div>
        <div className="bg-cover bg-center h-screen w-full bg-[url(/img/consult.png)] ">
          <div className="text-start text-custom1 text-8xl font-bold pl-10 pt-10">
            Consult
          </div>
        </div>
        <div className="bg-cover bg-center h-screen w-full bg-[url(/img/augmentedReality.png)] ">
          <div className="text-start text-white text-9xl font-bold pl-10 pt-10">
            AR
          </div>
        </div>
      </div>

      <div className="bg-custom1 text-white">
        <div className="container mx-auto px-6 pt-10">
          <div className="text-3xl font-medium mb-4">GET IN TOUCH</div>
          <div>Email Address :Hometech@gmail.com</div>
          <div>Phone Number : +66 97 832 5547</div>
          <div>Location : 101/62 Donmuang Donmuang Bangkok 10210</div>
        </div>
        <div className="container flex justify-end mx-auto py-2 px-6">
          <div>©Home Tech</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default service;
