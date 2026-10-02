# DESIGN.md

## Direction

หน้า demo ใช้แนวทาง technical utility lab: พื้นหลังเข้ม, accent violet/fuchsia, surface โปร่งแสง และ typography ที่อ่านง่าย เพื่อให้ utility classes เป็นจุดเด่นของหน้า

## Color tokens

| Token | Value | Usage |
| --- | --- | --- |
| Background | `#020617` | App canvas / slate-950 |
| Surface | `rgba(255,255,255,0.04)` | Cards และ preview panels |
| Surface strong | `#ffffff` | Contrast card |
| Text primary | `#f8fafc` | Headings และ important content |
| Text secondary | `#94a3b8` | Body copy และ metadata |
| Accent | `#c4b5fd` | Primary action และ highlights |
| Accent secondary | `#f0abfc` | Gradient / decorative emphasis |
| Success | `#86efac` | Status indicator |

## Typography

- Sans: `Inter`, fallback เป็น system UI
- Mono: `SFMono-Regular`, `Consolas`, `Liberation Mono`
- Display heading: responsive `text-5xl` ถึง `text-7xl`, tight tracking
- Body: 18px equivalent พร้อม line-height กว้างเพื่ออ่านง่าย
- Code labels: mono, ขนาดเล็ก, สี violet อ่อน

## Spacing and shape

- Page gutter: `px-6 sm:px-10 lg:px-12`
- Section rhythm: `py-16` และ hero `py-20 lg:py-28`
- Primary radius: `rounded-xl` สำหรับ controls และ `rounded-2xl`/`rounded-3xl` สำหรับ surfaces
- Borders: white 10–15% opacity
- Elevation: shadow ใหญ่แบบ low-contrast เพื่อรักษา dark canvas

## Accessibility

- ใช้ semantic landmarks (`main`, `header`, `section`, `footer`)
- ทุก interactive element มี accessible name และ visible `focus-visible` outline
- Toggle ใช้ `aria-pressed`
- สีข้อความ secondary ต้องยังอ่านได้บนพื้นหลัง dark และไม่ใช้สีเป็นตัวบอก state เพียงอย่างเดียว
