export default function SkillCard(props) {
  return (
    <div className="bg-bgprimary w-1/5 max-sm:w-full rounded-lg cardShadow">
      <h2 className="text-blue-300 text-lg text-center py-2">{props.title}</h2>
      <div className='flex flex-row px-2 pb-2 gap-2 w-full flex-wrap justify-center items-center'>
        {props.skills.map((skill) => {
          return <div key="" className="bg-bgprimary px-3 py-1 text-sm text-textsecondary rounded-lg max-sm:text-sm border border-emerald-400">
            {skill}
          </div>
        })
        }
      </div>
    </div>
  )
}

// export default function SkillCard(props) {
//   return (
//     <div className="w-80 md:w-96 text-center h-44 md:h-60 border-animation text-white flex justify-center items-center">
//       <img src={props.url} className="w-28 h-28 md:w-40 md:h-40" />
//     </div>
//   )
// }

// export default function SkillCard() {
//   return (
//     <div className="w-96 text-center rounded-xl border-2 border-cyan-600 h-60">
//       <div className="flex flex-row border-b-2 border-cyan-600">
//         <div className="w-3 h-3 bg-white rounded-full mx-2 my-2"></div>
//         <div className="w-3 h-3 bg-white rounded-full mx-2 my-2"></div>
//         <div className="w-3 h-3 bg-white rounded-full mx-2 my-2"></div>
//       </div>
//       <div className="flex justify-center items-center h-52">
//         <img src="./public/assets/Node.svg" className="w-40 h-40" />
//       </div>
//     </div>
//   )
// }

// export default function SkillCard() {
//   return (
//     <div className="w-96 bg-cyan-800 text-center ">
//       <div className="mx-2 my-3 pb-1 border-b-2 border-slate-800 text-3xl text-center">MERN Stack Developer</div>
//       <div>
//         <p className="text-2xl">REACTJS</p>
//         <div className="my-2 mx-6 relative h-3 bg-fuchsia-400  before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-fuchsia-700 "></div>
//       </div>
//     </div>
//   )
// }