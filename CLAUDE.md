# Sydnie Hair Salon & Day Spa — project notes

- **What this is:** a fictional brand used as a Bluluma design case study (formerly the "Styles Hair Salon" SwiftLift preview). All names, team members and contact details are placeholders — keep them fake.
- **Style:** "Fashion Editorial" — ink #121110 base, ivory #F4F0EA light sections, champagne #CDB088 (only accent; bronze #8A7341 for small text on ivory), smoke #BDB6AC body text on dark, graphite #2C2A27 lines. Headings Playfair Display (italic champagne accent word), body Manrope. Square corners, magazine masthead "SYDNIE" wordmark.
- **Shared data:** `src/lib/site.ts` (name, phone, email, address, hours, nav, team).
- **Utilities:** `src/index.css` → `.wrap`, `.serif`, `.label`, `.btn-light`, `.btn-gold`, `.btn-ink`.
- **Components:** `PageHero` (split title/image), `ServiceList` (hair + spa menus), `OfferBand` (10% newsletter offer).
- **Deploy:** Netlify from `main`; `public/_redirects` = SPA fallback. Keep the netlify.app noindex script in `index.html`.
- Forms are demo only (no backend). Footer: fictional-brand note + "Web Design by Bluluma | Powered by SwiftLift".
