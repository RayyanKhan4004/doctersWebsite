import React from "react";

import doctor from "../assets/doctorImg.png";
import Aftar from "./Aftar";
import "./styles/styles.css";
function HomeCoponent() {
  return (
    <>
      <div className="flex  flex-col mt-20 justify-center items-center">
        <div className="flex lg:flex-row flex-col-reverse  w-[100%] max-w-[1380px] items-center justify-between  main-box gap-[2rem]">
          <div className=" max-w-[657px]">
            <h3 className="font font-semibold size40">
              Providing Quality{" "}
              <span className="text-[#007E85] ">Healthcare</span> for A
              <br /> <span className="text-green-600  ">Brighter </span>
              and <span className="text-green-600">Healthy </span>
              future
            </h3>
            <div style={{ marginTop: "30px" }} className=" w-[587] text-sm ">
              <p
                style={{
                  fontFamily: "Lato",
                  fontSize: "20px",
                  color: "#474747",
                  letterSpacing: "1px",
                  fontWeight: "lighter",
                  opacity: 0.8,
                }}
              >
                At our hospital, we are dedicated to providing exceptional
                medical care to our patients and their families. Our experienced
                team of medical professionals, cutting-edge technology, and
                compassionate approach make us a leader in the healthcare
                industry
              </p>
            </div>
            <button
              style={{
                width: "252px",
                height: "51px",
               
                marginTop: "80px",
                fontFamily: "LT",
              }}
              className="bg-[#007E85]  rounded-lg text-white letterSpacing "
            >
              Appointment
            </button>
          </div>
          <div className="  flex justify-center relative flex-row ">
            <div className="z-[11] translate-y-[70%]">
              <Aftar />
            </div>
            <img
              className="relative sm:min-w-[526px] sm:min-h-[626px]  sm:h-[526px] sm:w-[626px] -top-10"
              src={doctor}
              alt=""
              
            />
            <div
              style={{ borderRadius: 10, alignItems: "center" }}
              className="text-[#000000] Lato absolute  right-[49px] top-[80px] p-2 hover:scale-105 z-[12] bg-white rounded-sm"
            >
              <span
                style={{ fontWeight: "bolder", fontSize: 22, color: "#007E85" }}
              >
                24/7
              </span>
              services
            </div>
          </div>
        </div>

        {/* 2ndcompo */}
      </div>
      <div className="flex  flex-col mt-20  justify-center items-center">
        <div className="flex lg:flex-row-reverse flex-col-reverse w-[100%] max-w-[1380px] items-center justify-between  main-box,m gap-[2rem]">
          <div className=" max-w-[657px]">
            <h3 className="font font-semibold size40">
              Providing Quality{" "}
              <span className="text-[#007E85] ">Healthcare</span> for A
              <br /> <span className="text-green-600  ">Brighter </span>
               and <span className="text-green-600">Healthy </span>
              future
            </h3>
            <div style={{ marginTop: "30px" }} className=" w-[587] text-sm ">
              <p
                style={{
                  fontFamily: "Lato",
                  fontSize: "20px",
                  color: "#474747",
                  letterSpacing: "1px",
                  fontWeight: "lighter",
                  opacity: 0.8,
                }}
              >
                At our hospital, we are dedicated to providing exceptional
                medical care to our patients and their families. Our experienced
                team of medical professionals, cutting-edge technology, and
                compassionate approach make us a leader in the healthcare
                industry
              </p>
            </div>
            <button
              style={{
                width: "252px",
                height: "51px",
                borderRadius: "8px",
                marginTop: "80px",
                fontFamily: "LT",
              }}
              className="bg-[#007E85]  text-white letterSpacing "
            >
              Appointment
            </button>
          </div>
          <div className="  flex justify-center relative flex-row ">
            <div className="z-[11] translate-y-[70%]">
              <Aftar />
            </div>
            <img
              className="relative sm:min-w-[526px] sm:min-h-[626px]  sm:h-[526px] sm:w-[626px] -top-10"
              src={doctor}
              alt=""
             
            />
            <div
              style={{ borderRadius: 10, alignItems: "center" }}
              className="text-[#000000] Lato absolute right-[49px] top-[80px]  p-2 hover:scale-105 z-[12]  bg-white rounded-sm"
            >
              <span
                style={{ fontWeight: "bolder", fontSize: 22, color: "#007E85" }}
              >
                24/7
              </span>
              services
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCoponent;
