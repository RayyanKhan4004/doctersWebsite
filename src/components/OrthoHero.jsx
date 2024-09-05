import React from "react";
import OrthoHeroImg from "../assets/OrthoHero.png";
function OrthoHero() {
  return (
    <div className="flex justify-center items-center font-latoN  md:w-[100%] mt-14 ">
      <div
        className="flex flex-row max-lg:flex-col justify-between xl:min-w-[1240px] max-w-[1240px]"
        
      >
        <div className="flex items-center justify-center">
          <div className="">
            <h3
              className="font font-semibold w-[499pxq]"
              style={{
                fontSize: "28px",
                
              }}
            >
              Bringing individualized
              <span className="text-[#007E85]"> Healthcare</span> for A
              <br /> <span className="text-green-600">Healthy </span>
              future
            </h3>
            <div style={{ marginTop: "30px" }} className="w-[587] text-sm">
              <p
                style={{
                  fontFamily: "Lato",
                  fontSize: "18px",
                  color: "#474747",
                  letterSpacing: "1px",
                  fontWeight: "lighter",
                  width: 500,
                  opacity: 0.8,
                }}
              >
                At our hospital, we are dedicated to providing exceptional
                medical care to our patients and their families. Our experienced
                team of medical professionals, cutting-edge technology, and
                compassionate approach make us a leader in the healthcare
                industry.
              </p>
            </div>
            <button
              style={{
                width: "252px",
                height: "51px",
                borderRadius: "8px",
                marginTop: "60px",
                fontFamily: "LT",
              }}
              className="bg-[#007E85]  text-white letterSpacing "
            >
              Appointment
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center lg:min-h-[330px]">
          <img src={OrthoHeroImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default OrthoHero;
