import SkillCard from '../cards/SkillCard'
import { skills } from '../constants'

export default function Skills() {
  return (
    <section className="bg-bgprimary w-full pb-4">
      <h1 className="text-white text-4xl py-2 my-4 max-sm:text-2xl textShadow">Skills</h1>
      <section className='flex flex-row justify-center w-full gap-4 flex-wrap'>
        {
          skills.map((skill,index)=>{
            return (
              <SkillCard key={index} title={skill.title} skills={skill.tech} />
            ) 
          })
        }
      </section>
    </section>
  )
}