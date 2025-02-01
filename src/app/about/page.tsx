import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center h-[730px] text-center text-white flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('../img/aboutUsTop.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
      </div>

      <section className="bg-[#E2D4B7] py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold flex-initial mb-8">Tech Home</h3>
          <p className="text-lg leading-relaxed text-justify">
            ก่อตั้งขึ้นในปี ค.ศ.2016
            โดยเกิดจากแนวคิดสถาปัตยกรรมที่อยู่เหนือกาลเวลาด้วยพื้นฐานทั้งในด้านสถาปัตยกรรมและการออกแบบภายในผสานการใช้งานเข้ากับความสวยงามได้อย่างลงตัว
            ตอบสนองความต้องการและแรงบันดาลใจของผู้อยู่อาศัยแนวทางของเรามีรากฐานมาจากการทำงานร่วมกันเราเชื่อว่าการออกแบบที่ดีต้องเกิดมาจากการร่วมมืออย่างใกล้ชิดกับลูกค้าของเรา
            วิสัยทัศน์อันเป็นเอกลักษณ์ของเราผสมผสานกับความเชี่ยวชาญได้
            ทำให้ที่อยู่อาศัยที่เราสร้างบ่งบอกความเป็นตัวคุณได้อย่างชัดเจน
            Lookin4Home
            เปลี่ยนแรงบันดาลใจให้กลายเป็นผลงานชิ้นเอกทางสถาปัตยกรรมที่สะท้อนความเป็นตัวตนของพวกเราด้วยการให้บริการครอบคลุมอย่างครบวงจร
            เช่น การออกแบบสถาปัตยกรรม,
            การออกแบบตกแต่งภายในและการก่อสร้างงานสถาปัตยกรรม
          </p>
        </div>
      </section>

      {/* Goal Section */}
      <section className="bg-gray-900 text-white py-12 flex-1 md:flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="lg:w-1/2 px-8">
            <Image
              src="/img/goal.png"
              alt="Home Tech Vision"
              className="w-full max-w-md mx-auto h-75"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:w-1/2 px-8 text-center lg:text-left pt-8">
            <h2 className="text-3xl font-bold mb-4">Our Goal</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              เป้าหมายของเราคือ การสร้างบ้านที่ผสมผสานเทคโนโลยี
              พวกเราค้นคว้าและพัฒนาศักยภาพของเราอย่างต่อเนื่องตามหลักการ
              "นวัตกรรมผสานกับการออกแบบ"
              ทำให้บ้านทุกหลังที่เราสร้างมานั้นล้วนมีความโดดเด่นเฉพาะตัว
              ที่มาพร้อมกับเทคโนโลยีที่ผสานเข้ากับการออกแบบอย่างแนบเนียน​
            </p>
          </div>
        </div>
      </section>

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

export default about;
