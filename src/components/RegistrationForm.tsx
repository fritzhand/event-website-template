
import { useState } from 'react'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

export default function RegistrationForm() {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setStatus('idle')

        // Mock API call
        // In a real application, you would send this data to your Google Sheet or backend
        // See README.md for instructions on how to wire this up to Google Sheets
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        console.log('Form submited:', data)

        setTimeout(() => {
            setLoading(false)
            setStatus('success')
            // Reset form after success if needed
            // e.currentTarget.reset() 
        }, 1500)
    }

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 bg-card border rounded-lg shadow-sm animate-in fade-in zoom-in duration-300">
                <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Registration Successful!</h3>
                <p className="text-muted-foreground">
                    Thank you for registering. We've sent a confirmation email to your inbox.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-medium text-primary hover:underline"
                >
                    Register another person
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Jane"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="jane@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="ticketType" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Ticket Type
                    </label>
                    <select
                        id="ticketType"
                        name="ticketType"
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="general">General Admission (Free)</option>
                        <option value="vip">VIP Access ($50)</option>
                        <option value="student">Student (Free)</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="dietary" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Dietary Requirements (Optional)
                    </label>
                    <input
                        id="dietary"
                        name="dietary"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="None, Vegetarian, Gluten-free, etc."
                    />
                </div>
            </div>

            {status === 'error' && (
                <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900 rounded-md flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Registering...
                    </>
                ) : (
                    'Complete Registration'
                )}
            </button>
        </form>
    )
}
