import Header from "@/components/Header" 
import HeroSection from "@/components/HeroSection"
import DashboardSection from "@/components/DashboardSection"
import SearchSection from "@/components/SearchSection"
import HighlightsSection from "@/components/HighlightsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      <main>
        <HeroSection />
        <DashboardSection />
        <SearchSection />
        <HighlightsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

