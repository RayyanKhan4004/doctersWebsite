import React from "react";

function Stats() {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl w-[100%] max-w-[1380px] md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-20">
      <h3
        style={{ fontSize: "36px", fontWeight:'500' }}
        className="text-center text-theme1 mt-20 mb-20"
      >
        Our Results in Numbers{" "}
      </h3>
      <div class="grid grid-cols-2 lg:gap-52 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl text-[#007E85] xl:text-6xl">
            99<span className="opacity-55">%</span>
          </h6>
          <p class="text-sm font-Bold tracking-widest  text-gray-800 uppercase lg:text-base">
            customer setisfaction
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl text-[#007E85]  xl:text-6xl">
            15<span className="opacity-55">k</span>
          </h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Online patients
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl text-[#007E85] xl:text-6xl">
            12<span className="opacity-55">k</span>
          </h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            patient Recovered
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl text-[#007E85] xl:text-6xl">
            20<span className="opacity-55">%</span>
          </h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            company groth
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
