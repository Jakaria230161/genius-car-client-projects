import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  
  return (
    <div>
      <div className="text-center my-4">
        <p className="text-orange-600 text-2xl font-bold">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p className="py-4">
          The majority have suffered alteration in some form, by injected
          humour, or randomized <br />
          words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className='text-center my-8'>
        <button className="btn btn-outline btn-warning">More Services</button>
      </div>
    </div>
  );
};

export default Services;