import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects' 
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import EducationSection from './components/EducationSection'
import Certifications from './components/Certifications'
import ContactForm from './components/ContactForm'
import Resume from './components/Resume'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className ="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects /> 
        <Skills />
        <WorkExperience />
        <EducationSection />
        <Certifications />
        <Resume />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

export default App
