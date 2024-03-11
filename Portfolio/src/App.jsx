import './App.css'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Footer from './component/Footer'
import Hero from './component/Hero'

export default function App() {
  return (
    <div className='bg-bgprimary'>
      <Hero />
      <section className="flex flex-col mx-4 my-4">
        <Skills />
        <Projects />
      </section>
      <Footer className="mt-4s" />
    </div >
  )
}
