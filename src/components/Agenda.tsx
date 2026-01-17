import { agenda } from '../content/agenda'

export default function Agenda() {
    return (
        <section id="agenda" className="scroll-mt-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Agenda</h2>
            <div className="max-w-3xl mx-auto space-y-8">
                {agenda.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <div className="md:w-32 flex-shrink-0">
                            <span className="font-semibold text-primary">{item.time}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            {item.speaker && (
                                <div className="text-sm font-medium text-muted-foreground mb-2">
                                    {item.speaker}
                                </div>
                            )}
                            {item.description && (
                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                            )}
                            <span className="inline-block mt-3 text-xs font-semibold px-2 py-1 rounded bg-secondary text-secondary-foreground uppercase tracking-wider">
                                {item.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
