import { sponsors } from '../content/sponsors'

export default function Sponsors() {
    const tiers = ['platinum', 'gold', 'silver', 'community']

    return (
        <section id="sponsors" className="scroll-mt-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Partners</h2>

            <div className="space-y-16">
                {tiers.map((tier) => {
                    const tierSponsors = sponsors.filter(s => s.tier === tier)
                    if (tierSponsors.length === 0) return null

                    return (
                        <div key={tier} className="text-center">
                            <h3 className="text-xl font-semibold uppercase tracking-widest text-muted-foreground mb-8">{tier} Sponsors</h3>
                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                                {tierSponsors.map((sponsor) => (
                                    <a
                                        key={sponsor.name}
                                        href={sponsor.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative grayscale hover:grayscale-0 transition-all duration-300"
                                    >
                                        <div className="h-16 md:h-20 w-32 md:w-48 flex items-center justify-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50">
                                            {/* Placeholder text if image fails or for simplicity */}
                                            <img
                                                src={sponsor.logo}
                                                alt={sponsor.name}
                                                className="max-h-full max-w-full object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />
                                            <span className="hidden font-bold text-muted-foreground/50 group-hover:text-foreground">{sponsor.name}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
