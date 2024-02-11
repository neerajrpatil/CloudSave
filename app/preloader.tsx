// 'use client'

// // Import necessary modules and components
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import twitterIcon from './hello.svg';

// // Functional component
// const App = () => {
//   // State to manage the visibility of the image
//   const [isVisible, setIsVisible] = useState(true);

//   // useEffect to run code after the component has mounted
//   useEffect(() => {
//     // Use setTimeout to hide the image after 2000 milliseconds (2 seconds)
//     const timeoutId = setTimeout(() => {
//       // Set isVisible to false, triggering the transition
//       setIsVisible(false);
//     }, 200);

//     // Cleanup function to clear the timeout when the component is unmounted
//     return () => clearTimeout(timeoutId);
//   }, []); // Empty dependency array means this effect runs only once after the initial render

//   return (
//     <div className='p-56 items-center scroll-smooth	'>

//          <div className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//             {/* Image component with your Twitter icon */}
//             <Image
//               src={twitterIcon}
//               alt="Follow us on Twitter"
//               width={850}
//               height={550}
//               className="w-950 h-550 rounded-lg shadow-lg flex relative left-32 -top-36 md:p-14"
//             />
//           </div>
//     </div>
  
//   );
// };

// export default App;








