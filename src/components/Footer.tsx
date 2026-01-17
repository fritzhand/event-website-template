import { siteConfig } from '../content/config'

export default function Footer() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <span className="text-xl font-bold">{siteConfig.name}</span>
                        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
                            {siteConfig.description}
                        </p>
                        <div className="mt-6 flex space-x-4">
                            {Object.entries(siteConfig.social).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground capitalize"
                                >
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Event</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#agenda" className="hover:text-foreground">Agenda</a></li>
                            <li><a href="#speakers" className="hover:text-foreground">Speakers</a></li>
                            <li><a href="#sponsors" className="hover:text-foreground">Sponsors</a></li>
                            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-foreground">Code of Conduct</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.organizer}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
