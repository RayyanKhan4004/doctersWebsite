import React from 'react';

const NeurologicalDisorders = () => {
  const disorders = [
    "Acute Spinal Cord Injury",
    "Alzheimer's Disease",
    "Amyotrophic Lateral Sclerosis (ALS)",
    "Ataxia",
    "Bell's Palsy",
    "Brain Tumors",
    "Cerebral Aneurysm",
    "Epilepsy and Seizures",
    "Guillain-Barré Syndrome",
    "Headache",
    "Head Injury",
    "Hydrocephalus",
    "Lumbar Disk Disease (Herniated Disk)",
    "Meningitis",
    "Multiple Sclerosis",
    "Muscular Dystrophy",
    "Neurocutaneous Syndromes",
    "Parkinson's Disease",
    "Stroke (Brain Attack)",
    "Cluster Headaches",
    "Tension Headaches",
    "Migraine Headaches",
    "How a Migraine Happens",
    "Diagnosis and Treatment for Migraines",
    "Encephalitis",
    "Septicemia",
    "Types of Muscular Dystrophy and Neuromuscular Diseases",
    "Myasthenia Gravis",
    "Overview of Stroke",
    "Types of Stroke",
    "Effects of Stroke",
    "Rehabilitation for Stroke"
  ];

  return (
    <div className='text-theme1 lg:min-w-[1400px] my-10  ' style={{ backgroundColor: 'rgba(179, 251, 255, 0.2)', padding: '20px', borderRadius: '8px', color: 'var(--text-theme1)', fontFamily: 'Lato' }}>
      <h2 className="font-semibold text-theme1 text-3xl mb-4">Neurological <span className='text-green-600'>Disorders</span> </h2> 
      <p className="mb-4 text-lg">Brain, Nerves and Spine</p>
      <p className="mb-4 text-base">
        There are many nervous system disorders that require clinical care by a physician or other healthcare professional. Listed below are some, for which we have provided a brief overview.
      </p>
      <ul className="list-disc pl-5">
        {disorders.map((disorder, index) => (
          <li key={index} className="mb-2 text-base">{disorder}</li>
        ))}
      </ul>
    </div>
  );
};

export default NeurologicalDisorders;
