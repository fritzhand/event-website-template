import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { siteConfig } from '../content/config'
import Agenda from './Agenda'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import FAQ from './FAQ'

function Hero() {
    return (
        <section className="relative py-20 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
                    <Calendar className="w-3 h-3 mr-1" /> {siteConfig.date}
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {siteConfig.name}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    {siteConfig.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to={siteConfig.contactRegister}
                        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                        href="#agenda"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        View Agenda
                    </a>
                </div>
                <div className="mt-8 flex items-center justify-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {siteConfig.venue}, {siteConfig.location}
                </div>
            </div>
        </section>
    )
}

export default function LandingPage() {
    return (
        <>
            <Hero />
            <div className="container mx-auto px-4 py-12 space-y-24">
                <Agenda />
                <Speakers />
                <Sponsors />
                <FAQ />
            </div>
        </>
    )
}
