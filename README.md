# Wagner Transporte Executivo Landing Page

This project is a single-page, mobile-first landing page tailored for Wagner Transporte Executivo. It highlights premium services, showcases the black Toyota Corolla Cross fleet, and offers clear calls-to-action that launch WhatsApp conversations with prospective clients.

## Features

- Responsive design optimized for mobile devices and scaling elegantly to desktop.
- Premium dark palette with gold accents, depth effects, and motion to convey a high-end chauffeur experience.
- Dedicated call-to-action buttons wired to open WhatsApp chats with localized, customizable messages.
- Built-in language switcher with flag buttons covering English, Brazilian Portuguese (default), and Latin American Spanish copy.
- Organized sections for services, differentiators, fleet highlights, testimonials, booking steps, and contact details.
- Curated photo assets (hero, services, fleet, and business card) stored locally in `assets/` for fast loading and easy swaps.
- Persistent floating WhatsApp call-to-action so visitors always have a quick way to reach out on mobile or desktop.

## Getting Started

1. Clone the repository or download the source files.
2. Open `index.html` in your browser to view the landing page locally.
3. If you need to change the contact number or WhatsApp greeting, update `PHONE_NUMBER` and the `whatsapp.general` strings in `script.js`.
4. Adjust the localized copy or add new languages by editing the `translations` object in `script.js`.
5. Swap or extend imagery by replacing the files inside `assets/` and updating the corresponding `<img>` references in `index.html`.

The page uses only vanilla HTML, CSS, and JavaScript, making it easy to host on any static web service or SaaS platform.