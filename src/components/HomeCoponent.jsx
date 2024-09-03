import React from "react";

import doctor1 from "../assets/Dr.abubakir sadiiq.png";

import Aftar from "./Aftar";
import "./styles/styles.css";

function HomeCoponent() {
  return (
    <>
      <div className="flex  flex-col mt-20 justify-center items-center">
        <div className="flex lg:flex-row flex-col-reverse  w-[100%] max-w-[1380px] items-center justify-between  main-box gap-[2rem]">
        <div className="max-w-[657px]">
  <h3 className="font font-semibold size40">
    Providing Quality{" "}
    <span className="text-[#007E85]">Healthcare</span> for A
    <br /> <span className="text-green-600">Brighter </span>
    and <span className="text-green-600">Healthy </span>
    future
  </h3>
  <div style={{ marginTop: "30px" }} className="w-[587] text-sm">
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
      At our hospital, we are dedicated to providing exceptional medical care to
      our patients and their families. Our experienced team of medical
      professionals, cutting-edge technology, and compassionate approach make us
      a leader in the healthcare industry.
    </p>
  </div>
  <div style={{ marginTop: "30px" }}>
    <h4 className="font-semibold text-lg">Dr. Abubakar Siddique</h4>
    <p className="text-sm">
      <strong>Qualifications:</strong>
      <br />
      MBBS (Pb), FCPS (Neurology), CRCP (DOW)
      <br />
      Stroke and Vascular Neurology Fellowship (USA)
      <br />
      Interventional and Diagnostic Neuroradiology Fellowship (USA)
      <br />
      Neurocritical Care Fellowship (USA)
      <br />
      Epilepsy Mini Fellowship (USA)
    </p>
    <p className="text-sm" style={{ marginTop: "10px" }}>
      <strong>Professional Memberships:</strong>
      <br />
      Member, American Academy of Neurology
      <br />
      Member, European Society of Minimally Invasive Neurological Therapy (ESMINT)
      <br />
      Member, Society of Vascular and Interventional Neurology (SVIN)
    </p>
    <p className="text-sm" style={{ marginTop: "10px" }}>
      <strong>Experience:</strong>
      <br />
      Consultant Interventional Neurologist
      <br />
      Ex-Assistant Professor & Head of Neurology Dept., SIMS/Services Hospital LHR
    </p>
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
</div>

          <div className="  flex justify-center relative flex-row ">
            <div className="z-[11] translate-y-[70%]">
              <Aftar />
            </div>
            <img
              className="relative sm:min-w-[526px] sm:min-h-[626px]  sm:h-[526px] sm:w-[626px] -top-10"
              src={doctor1}
              alt="Dr. Abubakar Siddiqui"
              
            />
            <div
              style={{ borderRadius: 10, alignItems: "center" }}
              className="text-[#000000] Lato absolute max-sm:right-0 max-sm:top-5  right-[75px] top-[110px] p-2 hover:scale-105 z-[12] bg-white rounded-sm"
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
      
    </>
  );
}

export default HomeCoponent;
