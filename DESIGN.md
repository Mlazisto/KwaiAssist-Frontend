# KwaiAssist Design Language (DESIGN.md)

## 1. Color Palette & Surface Elevation
- **Canvas / Base Surface**: `rgb(246, 245, 241)` (`#F6F5F1`) — Warm Sand / Architectural Linen.
- **Card / Raised Surface**: `#FFFFFF` — Pure White with subtle warm ambient tint.
- **Deep Surface / Inverted**: `#0F172A` — Deep Slate / Charcoal.
- **Primary Text**: `#0F172A` (Contrast > 14:1 on canvas).
- **Secondary Text**: `#475569` (Slate-600, Contrast > 5.5:1 on canvas, WCAG AA/AAA compliant).
- **Muted Text / Meta**: `#64748B` (Slate-500, minimum 13px, uppercase tracking).
- **Brand Accent**: `#059669` / `#10B981` — Pine & Emerald Green (WhatsApp familiarity, used with restraint).
- **Hairline Borders**: `rgba(15, 23, 42, 0.08)` / `#E5E2D9`.

## 2. Typography Ladder
- **Display Serif**: `'Cormorant Garamond', Georgia, serif` (Editorial authority, headings).
- **Body & UI Sans**: `'Plus Jakarta Sans', system-ui, sans-serif` (Crisp legibility).
- **Operational Mono**: `'JetBrains Mono', monospace` (Timestamps, chapter indices, currency digits).

### Scale & Line-Length Rules
- **Display 1**: `text-4xl sm:text-5xl lg:text-[4rem]` with `leading-[1.08]` and `text-wrap: balance`.
- **Display 2 (H2)**: `text-3xl sm:text-4xl lg:text-5xl` with `leading-[1.15]`.
- **Display 3 (H3)**: `text-2xl sm:text-3xl` with `leading-snug`.
- **Lead Paragraphs**: `text-base sm:text-lg text-slate-600` clamped to `65ch`–`75ch` (`max-w-2xl` / `max-w-prose`) with `text-wrap: pretty`.
- **Micro / Metadata**: `text-xs uppercase tracking-widest font-mono` or `font-medium`.

## 3. Anti-Slop Discipline
- **Zero Static Pills**: Never wrap static metadata or tags in capsule pills. Render metadata as unboxed text with typographic delimiters (`·`, `/`).
- **Zero Card-in-Card Syndrome**: Avoid deeply nested boxed containers. Use structural dividers, subtle background contrast, or airy grid lines.
- **Physical Motion**: All transitions use smooth easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Focus Rings**: Mandatory visible focus state on all interactive controls (`focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2`).
