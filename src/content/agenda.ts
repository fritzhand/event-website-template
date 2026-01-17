export interface AgendaItem {
    time: string;
    title: string;
    speaker?: string;
    description?: string;
    type: 'talk' | 'workshop' | 'break' | 'panel';
}

export const agenda: AgendaItem[] = [
    {
        time: "09:00 AM",
        title: "Registration & Breakfast",
        type: "break"
    },
    {
        time: "10:00 AM",
        title: "Opening Keynote: The Future of Events",
        speaker: "Jane Doe",
        description: "An inspiring talk about what lies ahead.",
        type: "talk"
    },
    {
        time: "11:30 AM",
        title: "Panel: Innovation in 2026",
        speaker: "Various Experts",
        description: "Industry leaders discuss emerging trends.",
        type: "panel"
    },
    {
        time: "01:00 PM",
        title: "Networking Lunch",
        type: "break"
    }
];
