// import React from 'react'

// const CarCard = ({cars}) => {

//   return (
//     <div className='h-70 px-5 py-2' >
//       <a href="/" className="flex my-2 px-5 gap-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <img className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ cars.image ? cars.image : 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'} alt=""/>
//         <div className="flex flex-col justify-between p-4 gap-2 leading-normal">
//             <h5 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{cars.title}</h5>
//             <p className="test-lg font-normal text-gray-700 dark:text-gray-400">Number of kilometer:<span className='text-xl font-bold' > {cars.kms}</span></p>
//             <p className="test-lg font-normal text-gray-700 dark:text-gray-400">Registration Place:<span className='text-xl font-bold' > {cars.place}</span></p>
//             <p className="test-lg font-normal text-gray-700 dark:text-gray-400">Orignal paint of cars:<span className='text-xl font-bold' > {cars.paint}</span></p>
//             <p className="test-lg font-normal text-gray-700 dark:text-gray-400">Number of scratchs:<span className='text-xl font-bold' > {cars.scratchs}</span></p>
//         </div>
//       </a>
//     </div>
//   )
// }

// export default CarCard

import React from 'react';

const CarCard = ({ cars }) => {
  return (
    <div className="h-80 px-5 py-2">
      <a href="/" className="flex my-2 px-5 gap-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={cars.image ? cars.image : 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'} alt="" />
        <div className="flex flex-col justify-between p-4 gap-4 leading-normal w-full md:w-2/3">
          <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{cars.title}</h5>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">Number of kilometers:</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{cars.kms}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">Registration Place:</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{cars.place}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">Original paint of car:</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{cars.paint}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">Number of scratches:</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{cars.scratchs}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CarCard;
