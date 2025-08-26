import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { StarBackground } from "../components/Starbackground"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
  {/*Theme Toggle is handled inside the Navbar - removed duplicate */}
        {/*Background Effects*/}
          <StarBackground/>
        {/*Navbar*/}
          <Navbar/>
        {/*Main Content*/}
          <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
          </main>


        {/*Footer*/}
        <Footer/>
    </div>
  )
}