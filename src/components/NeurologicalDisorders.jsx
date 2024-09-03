// import React from 'react';
// import { disorders } from '../data/allImpData';

// const NeurologicalDisorders = () => {


//   return (
//     <div className='text-theme1 w-[100vw] mr-[25px] my-10  ' style={{ backgroundColor: 'rgba(179, 251, 255, 0.2)', padding: '20px', borderRadius: '8px', color: 'var(--text-theme1)', fontFamily: 'Lato' }}>
//       <h2 className="font-semibold text-theme1 text-3xl mb-4">Neurological <span className='text-green-600'>Disorders</span> </h2> 
//       <p className="mb-4  text-xl">Brain, Nerves and Spine</p>
//       <p className="mb-4  text-lg">
//         There are many nervous system disorders that require clinical care by a physician or other healthcare professional. Listed below are some, for which we have provided a brief overview.
//       </p>
//       <ul className="list-disc pl-5">
//         {disorders.map((disorder, index) => (
//           <li key={index} className="mb-2 text-[#000000B2] text-base">{disorder}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NeurologicalDisorders;
import React, { useState } from 'react';
import { disorders } from '../data/allImpData';

const NeurologicalDisorders = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
  
    setShowAll(!showAll);
  };

  return (
    <div className='text-theme1 w-[100vw] font-latoB mr-[25px] my-10' >
      <h2 className="font-semibold font-latoB text-theme1 text-3xl mb-4">Neurological <span className='text-green-600'>Disorders</span></h2>
      <p className="mb-4 text-xl font-bold ">Brain, Nerves and Spine</p>
      <p className="mb-4 text-lg">
        There are many nervous system disorders that require clinical care by a physician or other healthcare professional. Listed below are some, for which we have provided a brief overview.
      </p>
      <ul className="list-disc font-latoN pl-5">
        {disorders.slice(0, showAll ? disorders.length : 5).map((disorder, index) => (
          <li key={index} className="mb-2 text-[#000000B2] text-base">{disorder}</li>
        ))}
      </ul>
      <button onClick={handleToggle} className="text-theme1 w-52 h-12 border-theme1 bg-transparent mt-4  border-2 rounded-md">
        {showAll ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default NeurologicalDisorders;
