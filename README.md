# Vastu Design — multipage Bootstrap website

This folder contains the complete responsive six-page website and all local assets. No npm install or build step is required.

## Pages

| Page | File | Content |
| --- | --- | --- |
| Home | `index.html` | Introduction, approach preview, service previews and interactive home check. |
| Our approach | `approach.html` | Your original Vastu paragraph, four principles and the Southern Hemisphere context. |
| Services | `services.html` | Service descriptions, property selection, consultations, renovations and development enquiries. |
| Our story | `story.html` | Delhi-to-Auckland perspective and the original portrait still. |
| FAQs | `faqs.html` | Eight expandable questions and answers. |
| Contact | `contact.html` | Enquiry form and helpful information to prepare. |

Every page has shared navigation and footer links. The current page is marked in the main navigation. Service enquiry links open Contact with the relevant service selected; home-check results also carry your chosen priority and a starting message. Query parameters use a fixed list of recognised services and priorities.

## Open the website

Extract the entire folder, then open `index.html` in a browser to preview the layout. All six pages, navigation, FAQs and the home check work locally. PHP email delivery requires PHP web hosting. Keep the HTML files together in the root of the folder and retain the `assets` directory.

For a local PHP preview, from this folder run:

```bash
php -S localhost:8000
```

Then open `http://localhost:8000`.

## Enable enquiry emails

Open `contact-config.php` and enter:

```php
'recipient_email' => 'YOUR_RECEIVING_EMAIL',
'sender_email' => 'AN_EMAIL_ON_YOUR_HOSTED_DOMAIN',
```

Alternatively set `VASTU_CONTACT_EMAIL` and `VASTU_FROM_EMAIL` in your hosting environment. The sender should use the website's own domain and be allowed by the hosting provider. Upload all files to PHP 7.4+ hosting with mail delivery enabled. Test delivery to your receiving inbox after configuration. PHP accepting a message does not guarantee inbox delivery; mail configuration, SPF/DKIM and spam filtering are managed by your host.

The form includes front-end and server-side validation, a CSRF token, a honeypot, a session-based submission limit and honest failure states. It does not pretend to send before a recipient is configured. The session limit is a basic deterrent, not a replacement for host-level abuse controls.

## Story image and video

The original story video file or direct video URL was not supplied. `story.html` preserves the original portrait from the supplied website screenshot as a still, using CSS clipping without generating or changing the face. Its resolution is limited by that reference. No fake play button is shown.

When you have the original video, set `storyVideoUrl` in `assets/js/site.js` to a direct local `.mp4`/`.webm` path or an HTTPS video file URL. It becomes a native, user-controlled video with no autoplay. For a high-resolution portrait instead, replace the story frame with your own portrait image.

## Included images

Six original illustrations were generated for this website:

- `hero-vastu-home.webp`
- `vastu-compass.webp`
- `home-in-hand.webp`
- `property-selection.webp`
- `home-consultation.webp`
- `renovation-model.webp`

Each illustration also has 480px and 800px responsive WebP variants. The primary images are 1000px or 1200px wide, WebP quality 81, with transparency preserved for the three cutout illustrations. Images below the hero are lazy-loaded; the hero receives high fetch priority. Intrinsic dimensions reserve layout space. `assets/images/image-manifest.json` records actual dimensions and file sizes.

The illustrations are conceptual brand artwork, not technical drawings or prescriptive Vastu room-direction plans. Advertising logos and contact details from the reference images are not included.

## Structure

```text
Vastu-Design-Website/
  index.html
  approach.html
  services.html
  story.html
  faqs.html
  contact.html
  contact.php
  contact-config.php
  README.md
  assets/
    css/styles.css
    js/site.js
    images/                 # WebP images and responsive variants
    fonts/                  # Local fonts and licences
    vendor/bootstrap/       # Local Bootstrap CSS, JS and MIT licence
```

## Editing

- Text and section structure: the relevant page's `.html` file.
- Header and footer: edit the shared templates in `assets/js/layout.js`. All six pages load this file before `site.js`; the current navigation item is selected automatically from `body[data-page]`. This works on hosting and when opening the HTML files locally, with JavaScript enabled.
- Colours, spacing and responsive styles: `assets/css/styles.css`.
- Home check, video URL and form behaviour: `assets/js/site.js`.
- Enquiry destination: `contact-config.php`.

Palette: ivory `#F8F8F4`, graphite `#2E342D`, muted olive `#59634F`, pale sage `#EFF1EA`, borders `#D8DED1`.

Bootstrap 5.3.8 is bundled locally. Lora and DM Sans fonts are bundled as Latin-subset WOFF2 files under their Open Font licences. The website does not depend on a CDN, tracking script or external font request to render.

Content updated on 6 October 2026 from vastudesigns.co.nz, retaining the existing six-page layout and artwork. Business details, Aanchal's biography, services, the $495 property selection rate, FAQs and email contact follow the source website. The existing short home reflection remains in place; it is not presented as the source website's five-question quiz. Email hosting configuration is still required for form delivery.
