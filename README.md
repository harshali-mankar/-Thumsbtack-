# TTL Next.js + TypeScript + MUI Template

## Installation

Install dependencies:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## Theme Configuration

All design system properties are centrally managed in `theme/theme.ts`:

### Typography & Font Family
- **Font Families**: 
  - Primary: `'Montserrat'` - Used for body text and most content
  - Secondary: `'Lufga'` - Used for headings (h1-h6)
- **Headings**: h1-h6 use custom font weights and Lufga family
- **Body Text**: Uses Montserrat for consistent readability

### Colors
- **Primary Color**: `#DF3F44` (Red) - Used for CTAs, highlights, and branding
- **Text Color**: `#414142` (Dark Gray) - Default text color
- **Custom Colors**: Extended palette includes:
  - `redLight`: `#FFE0E0` - Light red backgrounds
  - `shopOrange`: `#F58220` - Product highlights
  - `shopBlue`: `#00B0AD` - Secondary highlights
  - `shopEquine`: `#9E3023` - Product variants
  - `shopBleeder`: `#663179` - Special product lines

### Breakpoints
Custom breakpoints defined for responsive design:
- `xs`: 0px (Mobile)
- `sm`: 600px (Tablet)
- `md`: 960px (Small Desktop)
- `lg`: 1200px (Desktop)
- `xl`: 1406px (Large Desktop)

### How to Use
Import and use the theme in your components:

```typescript
import theme from '@/theme/theme';
```

Theme properties are automatically applied through MUI's `ThemeProvider` in `ThemeRegistry.tsx`.
