# Afeef Portfolio

A personal portfolio website for Mohammed Afeef, showcasing development work, skills, creative experiments, and contact options.

## Features

- Responsive portfolio layout for desktop, Windows, and Android screens
- Mobile navigation overlay with animated menu toggle
- Light and dark color themes
- Scroll reveal animations
- Filterable project section
- Contact links for Gmail, LinkedIn, GitHub, and Instagram
- Contact form that opens a pre-filled Gmail compose window
- Message character counter with a 500-character limit
- Reduced-motion support for accessibility

## Project Files

```text
index.html       Main portfolio markup and content
style.css        Layout, responsive styles, themes, and animations
script.js        Theme toggle, mobile menu, filters, form behavior, and interactions
afeee jani.jpeg  Portfolio portrait used in the hero section
```

## Run Locally

No build tools or dependencies are required.

1. Open `index.html` directly in a browser, or
2. Start a simple local server from the project folder:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Contact Form

The contact form opens Gmail with the recipient, subject, visitor email, and message pre-filled. The visitor must click **Send** inside Gmail to deliver the message.

The recipient address is configured in `index.html` and `script.js`:

```text
mohammedafeef7006@gmail.com
```

A backend service would be required for fully automatic form delivery without opening Gmail.

## Customization

- Edit text, links, and project content in `index.html`.
- Change colors, typography, spacing, and responsive breakpoints in `style.css`.
- Update interactions and form behavior in `script.js`.
- Replace `afeeef jani.jpeg` with another image only after updating the image path in `index.html`.

## Browser Support

The site is designed for current versions of Chrome, Edge, Firefox, and Safari on desktop and mobile devices.
