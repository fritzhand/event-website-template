
import RegistrationForm from './RegistrationForm'

export default function RegistrationPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-2xl">
            <div className="space-y-6 text-center mb-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Secure Your Spot
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[600px] mx-auto">
                    Fill out the form below to register for the event. We can't wait to see you there!
                </p>
            </div>

            <div className="bg-card border rounded-lg shadow-sm p-6 md:p-8">
                <RegistrationForm />
            </div>
        </div>
    )
}
