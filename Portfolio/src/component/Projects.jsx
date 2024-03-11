import ProjectCard from "../cards/ProjectCard";
import { Portfolio } from "../assets";

export default function Projects() {
  return (
    <section className="bg-bgprimary w-full">
      <h1 className="text-white text-4xl py-2 my-4 max-sm:text-2xl textShadow">Projects</h1>
      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
        <ProjectCard projectName={"Portfolio"} projectImgUrl={Portfolio} />
      </div>
    </section>
  )
}