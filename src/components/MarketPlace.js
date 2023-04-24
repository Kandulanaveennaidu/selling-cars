// import React, { useEffect, useState } from 'react'
// import CarCard from './CarCard'
// import axios from 'axios'

// const MarketPlace = () => {

//   const [cars, setcars] = useState([])
//   useEffect(() => {
//     async function fetchCars(){
//       const res = await axios.get("https://marketplace-server-frjo.onrender.com/api/car")
//        console.log(res.data.cars);
//        setcars(res.data.cars);
//     }
//     fetchCars();
//   }, [])


//   return (
//     <div className='flex place-content-center'>
//         <div className='flex flex-col justify-center'>
//           {
//             cars.map(ele => (
//               <CarCard key={ele._id} cars={ele} />
//             ))
//           }
//         </div>
//     </div>
//   )
// }

// export default MarketPlace


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarCard from './CarCard';

const MarketPlace = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await axios.get("https://marketplace-server-frjo.onrender.com/api/car");
        setCars(res.data.cars);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCars();
  }, []);

  return (
    <div className="flex place-content-center">
      <div className="flex flex-col justify-center">
        {cars.map(car => (
          <CarCard key={car._id} cars={car} />
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
