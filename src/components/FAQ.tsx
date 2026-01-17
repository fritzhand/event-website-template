import { faq } from '../content/faq'
import { Plus } from 'lucide-react'

export default function FAQ() {
    return (
        <section id="faq" className="scroll-mt-20 py-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Often Asked</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faq.map((item, index) => (
                    <details key={index} className="group border rounded-lg bg-card px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground font-medium list-none">
                            <h3 className="text-lg font-semibold">{item.question}</h3>
                            <Plus className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45" />
                        </summary>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    )
}
