import { speakers } from '../content/speakers'
import { Linkedin, Twitter } from 'lucide-react'

export default function Speakers() {
    return (
        <section id="speakers" className="scroll-mt-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {speakers.map((speaker) => (
                    <div key={speaker.id} className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all pt-6">
                        <div className="aspect-square w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted relative mb-4">
                            {/* Simplified image handling with fallback */}
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMC 0tNC00SDhYNCA0IDAgMCAwLTQgMnYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+'
                                }}
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="font-bold text-xl">{speaker.name}</h3>
                            <p className="text-primary font-medium text-sm mb-1">{speaker.role}</p>
                            <p className="text-muted-foreground text-sm mb-4">{speaker.company}</p>
                            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{speaker.bio}</p>

                            <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                {speaker.social?.twitter && (
                                    <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                )}
                                {speaker.social?.linkedin && (
                                    <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
