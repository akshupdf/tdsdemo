import React, { useState, useEffect } from "react";
import img1 from "../images/D1.png"
import img2 from "../images/D2.png"
// import img3 from "../images/D3.png"
import img4 from "../images/D4.png"
import img5 from "../images/liv.png"

export default function Homepage() {
  const [isPastThreshold, setIsPastThreshold] = useState("");

   // Scroll effect to toggle background
   useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY 
      setIsPastThreshold(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

// console.log(isPastThreshold);

const data1 = [ {
   id: 1,
    image: img1
} ,
{
    id: 2,
     image: img2
 }]

//  const data2 = [ 
// {
//    id: 1,
//     image: img3
// },
// {
//    id: 2,
//     image: img4
// }]

  return (
    <div className={ isPastThreshold > 100 ? `bg-white  text-black` : `bg-black min-h-[120vh] h-auto text-white`} >
      <div className='w-[90%] flex mx-auto fixed h-[7vh]'>
        <div className='w-[20%] font-extrabold text-4xl py-2 '>
            D
        </div>
        <div className='w-[80%] py-4'>
        <ul className='flex justify-end'>
            <li className='mr-5'>Home</li>
            <li className='mr-5'>Projects</li>
            <li className='mr-5'>Designs</li>
        </ul>
        </div>
        </div>
        <div className="w-full h-[10vh]">
        <div className={`text-center mx-auto w-full  fixed h-40 z-20 mt-[10vh]`}>
          <h1 className={`text-5xl mb-8 transition-all  absolute  duration-700 ${isPastThreshold > 180 ? "left-[-100vh]" : "left-[28%]" }`}> {isPastThreshold > 110 ? (<p> PLUG IN THE POWER OF <span className='bg-gradient-to-r from-[#DF26FD] via-[#159DFF] to-[#159DFF] bg-clip-text text-transparent'>DESIGN</span> </p> ) : (<p className="ml-[24vh]">LOOKS DULL?</p>) }   </h1>
          <h1 className='text-5xl mb-8 transition-all duration-700'>{isPastThreshold > 180 ? <span className='bg-gradient-to-r from-[#DF26FD] via-[#159DFF] to-[#159DFF] bg-clip-text text-transparent'>DESIGN</span> : ""}</h1>
            <p className={`w-[70%] mx-auto ${isPastThreshold > 340 ? " mt-[-40vh]": " mt-[8vh]" }`}>Turn your vision into reality with personalized design solutions. From concept to completion, we help create a space that's uniquely yours, combining style, comfort, and functionality every step of the way.</p>
        </div>
        </div>
     

        <div className='h-[80vh] relative ' >
            <div className={`w-[83vh] h-[83vh] mt-[30vh] z-40 rounded-full border overflow-hidden fixed left-[30%]  bg-white  mx-auto ${
    isPastThreshold > 220  ? "border-white `w-[8vh] h-[8vh]" :"border-black" } ${
    isPastThreshold > 90  ? " " :" " }`}>
      <div className={`transition-all duration-700 absolute  ${
    isPastThreshold > 90  ? "rotate-0 -top-16 left-[33.2%] rounded-t-2xl " : " -top-[40vh] left-[5%]   -rotate-90 "
  }`}>
      <svg width="407" height="604" viewBox="0 0 637 604" fill={
    isPastThreshold > 90  ? "white" : "black" } xmlns="http://www.w3.org/2000/svg">
<path d="M157.211 261.595V576.018" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M337.769 418.824L837.177 418.823" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M157.203 528.869L271.182 528.869C288.871 528.868 305.835 521.841 318.343 509.333C330.851 496.825 337.878 479.861 337.879 462.172L337.82 375.411C337.804 357.742 330.778 340.802 318.284 328.309C305.791 315.815 288.85 308.789 271.182 308.773L157.203 308.773" fill="white"/>
<path d="M157.203 528.869L271.182 528.869C288.871 528.868 305.835 521.841 318.343 509.333C330.851 496.825 337.878 479.861 337.879 462.172L337.82 375.411C337.804 357.742 330.778 340.802 318.284 328.309C305.791 315.815 288.85 308.789 271.182 308.773L157.203 308.773" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
              
                  <div className={`transition-all duration-700 absolute -z-10  ${
    isPastThreshold > 90  ? "rotate-0 -top-6 -left-[1%] rounded-t-2xl " : " top-[52vh] left-[9%]  -rotate-90 "
  }`}>

              
                <svg width="408" height="555" viewBox="0 0 638 555" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M574.75 432.704H480.423" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M574.75 432.704H480.423" stroke="#262626" stroke-width="0.125"/>
<path d="M574.75 306.92H480.423" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M574.75 306.92H480.423" stroke="#262626" stroke-width="0.125"/>
<path d="M480.423 212.595V527.018" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.865 369.818L-100.177 369.818" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M480.423 479.869L366.444 479.869C348.755 479.868 331.791 472.841 319.283 460.333C306.775 447.825 299.748 430.861 299.747 413.172L299.806 326.411C299.823 308.742 306.849 291.802 319.342 279.308C331.836 266.815 348.776 259.789 366.444 259.773L480.423 259.773" fill="#262626"/>
<path d="M480.423 479.869L366.444 479.869C348.755 479.868 331.791 472.841 319.283 460.333C306.775 447.825 299.748 430.861 299.747 413.172L299.806 326.411C299.823 308.742 306.849 291.802 319.342 279.308C331.836 266.815 348.776 259.789 366.444 259.773L480.423 259.773" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  </div>
                
            </div>
      <div className="h-auto bg-white">

 
        <div  className={`w-[46.5%] left-[-190vh] overflow-hidden -z-10 mx-auto bg-white flex gap-4 justify-between fixed transition-all duration-700 
   ${isPastThreshold > 180 ? "h-4 left-[10vh] top-[15rem] z-40" : "h-4"}
    ${isPastThreshold > 240 ? "h-[70vh] left-20  z-40" : "left-20 top-[70vh]"}
    ${isPastThreshold > 350 ? "top-[-80vh] fixed" : "top-0"}
  `}>
             {
                data1.map((item) => {
                  return  <div key={item.id}>
<img src={item.image} alt="demo"  className={`w-[55vh] h-[70vh] object-cover rounded-xl cursor-pointer`}/>
                    </div>
                    
                })
             } 


        </div>
        <div  className={`w-[45%] right-[-100vh] top-[15rem] overflow-hidden -z-10 mx-auto bg-white flex gap-4 justify-between   fixed transition-all duration-700 
   ${isPastThreshold > 180 ? "h-4 right-[4vh]  z-40" : "h-4" }
    ${isPastThreshold > 240 ? "h-[70vh] right-[8vh]  z-40" : " "}
    ${isPastThreshold > 350 ? "top-[-80vh] fixed" : "top-0"}
  `}>
             <img src={img5} alt="demo"  className={` h-[70vh] object-cover rounded-xl cursor-pointer transition-all duration-700    ${isPastThreshold > 350 ? "top-[8vh] fixed w-[125vh] right-[36vh]" : "w-[45vh]"}  
              ${ isPastThreshold > 450  ? "w-[165vh] left-[20vh]" : "w-[45vh] right-[26vh]" }` }/>
             <img src={img4} alt="demo"  className={`w-[55vh] h-[70vh] object-cover rounded-xl cursor-pointer`}/>


        </div>
        </div>
        {/* <div className="h-screen">
        <img src={img5} alt="demo"  className={` object-cover  absolute rounded-xl cursor-pointer  transition-all duration-700  
    ${
      isPastThreshold > 350  ? " w-[100vh] right-[20vh] top-[65vh] z-50" : "w-[40vh] top-[60vh] right-[48vh] -z-10" }
       ${
      isPastThreshold > 450  ? " w-[160vh] h-[80vh] right-[20vh]" : "w-[40vh] top-[60vh] right-[48vh] -z-10" }
      `}/>
      <p className="w-[50%] text-center mx-auto">With spacious open-plan living areas, floor-to-ceiling windows, and a seamless blend of indoor and outdoor spaces, 
        Serenity Haven is designed to capture the essence of relaxation and comfort. Whether it's enjoying morning coffee on the sun-drenched patio or
         unwinding in the cozy interiors, this home provides the perfect setting for a serene and harmonious lifestyle.</p>
        </div> */}

<p className="w-[50%] absolute top-[128vh] left-[30%] mx-auto">With spacious open-plan living areas, floor-to-ceiling windows, and a seamless blend of indoor and outdoor spaces, 
        Serenity Haven is designed to capture the essence of relaxation and comfort. Whether it's enjoying morning coffee on the sun-drenched patio or
         unwinding in the cozy interiors, this home provides the perfect setting for a serene and harmonious lifestyle.</p>
        <div className="absolute top-[148vh] left-[50%]">
        <svg width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="54.5" cy="54.5" r="53.5" stroke="#262626" stroke-width="2" stroke-dasharray="5 5"/>
<g clip-path="url(#clip0_2_433)">
<path d="M74.9375 55H35.0625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.375 38.6875L35.0625 55L51.375 71.3125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_433">
<rect width="58" height="58" fill="white" transform="translate(26 26)"/>
</clipPath>
</defs>
</svg>
</div>
</div>
    </div>
  )
}