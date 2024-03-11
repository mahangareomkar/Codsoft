export default function ProjectCard({projectName,projectImgUrl}) {
  return (
    <div className="bg-bgprimary w-1/5 max-sm:w-full rounded-lg cardShadow flex flex-col gap-4 justify-center items-center py-4 hover:cursor-pointer">
      <img src={projectImgUrl} className="w-4/5 h-auto" />
      <p className="text-2xl text-blue-300 font-medium max-sm:text-lg">{projectName}</p>
      {/* <div className="w-4/5 flex flex-row justify-between items-center text-lg text-textsecondary">
        <p>&lt; &gt; 1k+</p>
        <div className="flex flex-row justify-between items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
          <p>10</p>
        </div>
      </div> */}
    </div>
  )
}


// export default function ProjectCard() {
//   return (
//     <div className="w-80 md:w-96 text-center rounded-xl border-2 border-cyan-600 h-44 md:h-60 ">
//       <div className="flex flex-row border-b-2 border-cyan-600">
//         <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full m-2"></div>
//         <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full m-2"></div>
//         <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full m-2"></div>
//       </div>
//       <div className="relative flex justify-center items-center h-36 md:h-52  hover:cursor-pointer overflow-hidden projectcard">
//         <img src="./public/assets/wbescraper.gif" className="w-full h-full rounded-b-xl" />
//         <div className="absolute w-full h-full bg-indigo-500 rounded-b-xl flex flex-col justify-center items-center top-slide"> 
//           <p className="text-md md:text-xl font-medium">Best Deals</p>
//           <p className="text-sm md:text-md">Best Deals is a python webscraper which gives the user the best deals from websites like amazon and flipkart</p>
//           <img src="./public/assets/github-mark.svg" className="w-8 h-8 md:w-12 md:h-12 opacity-50 hover:opacity-100 my-2" />
//         </div>
//       </div>
//     </div>
//   )
// }

//top-full
// before:absolute before:bg-cyan-300 before:w-full before:h-full before:rounded-b-xl before:content-webscraper