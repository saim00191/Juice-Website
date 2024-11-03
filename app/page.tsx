import Delivery from "@/components/Delivery/Delivery"
import Features from "@/components/Features/Features"
import Hero from "@/components/Hero/Hero"
import PopularJuices from "@/components/PopularJuices/PopularJuices"
import ProgramOutcome from "@/components/ProgramOutcome/ProgramOutcome"
import Reservation from "@/components/Reservation/Reservation"
import Teams from "@/components/Teams/Team"
const HomePage = () => {
  return (
    <div className="bg-green-100 relative z-10">
      <Hero /> 
      <Features />
      <PopularJuices />
      <Delivery />
      <Teams />
      <Reservation />
      <ProgramOutcome/>
    </div>
  )
}

export default HomePage