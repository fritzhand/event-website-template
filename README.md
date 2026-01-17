# Event Website Template

A sanitized, generic, and reusable event website starter built with React, Vite, and Tailwind CSS.
Designed for rapid deployment of event landing pages.

## Features

- 🎨 **Modern Design**: Clean, responsive UI with Tailwind CSS.
- 📝 **Content-Driven**: All event data (Agenda, Speakers, FAQ) is managed in `src/content/`.
- 🚀 **Performance**: Fast build and load times with Vite.
- 🔒 **Sanitized**: No hardcoded secrets or PII.

## Quick Start

1.  **Clone and Install**
    ```bash
    git clone <your-repo-url>
    cd event-website-template
    npm install
    ```

2.  **Develop**
    ```bash
    npm run dev
    ```

3.  **Build**
    ```bash
    npm run build
    ```

## Customization

### Content
Modify the files in `src/content/` to update the site data:
- `config.ts`: General site info (Name, Date, Venue, Social Links).
- `agenda.ts`: Schedule of events.
- `speakers.ts`: Speaker profiles (Ids, bios, photos).
- `sponsors.ts`: Sponsor logos and tiers.
- `faq.ts`: Questions and answers.

### Assets
Place your images in `public/` or `src/assets/`. Update references in the content files.

### Styling
- Update `tailwind.config.js` to change the brand colors (`colors.brand.primary`).
- Edit `src/index.css` for global styles.

## Integration

### Backend / Forms (Google Sheets Integration)
The included Registration form is mocked by default. To save data to a Google Sheet:

1.  **Create a Google Sheet**
    - Create a new Google Sheet.
    - Add headers in the first row: `timestamp`, `firstName`, `lastName`, `email`, `ticketType`, `dietary`.

2.  **Add Apps Script**
    - Go to **Extensions** > **Apps Script**.
    - Copy and paste the following code:
    ```javascript
    function doPost(e) {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var data = JSON.parse(e.postData.contents);
      sheet.appendRow([
        new Date(),
        data.firstName,
        data.lastName,
        data.email,
        data.ticketType,
        data.dietary
      ]);
      return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    ```

3.  **Deploy as Web App**
    - Click **Deploy** > **New deployment**.
    - Select type: **Web app**.
    - Description: "Form Handler".
    - Execute as: **Me**.
    - Who has access: **Anyone** (Important!).
    - Click **Deploy** and copy the **Web App URL**.

4.  **Connect to Form**
    - In `src/components/RegistrationForm.tsx`, replace the mock logic with a `fetch` call to your Web App URL:
    ```typescript
    await fetch('YOUR_WEB_APP_URL', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "text/plain" } // Use text/plain to avoid CORS preflight options
    });
    ```


### Analytics
1. Copy `.env.example` to `.env`.
2. Set `VITE_ENABLE_ANALYTICS=true`.
3. Configure your analytics provider in `src/content/config.ts` or `src/App.tsx`.

## Deployment

### Vercel
1. Import this repo into Vercel.
2. Vercel will automatically detect Vite.
3. Deploy!

### Netlify
1. "New site from Git".
2. Build command: `npm run build`.
3. Publish directory: `dist`.

## License

[MIT](LICENSE) © 2026 VentureStudio, Ahmedabad University
