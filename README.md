# React + TypeScript + Vite + Tailwind CSS v4

โปรเจกต์ demo สำหรับทดลองสร้าง UI ด้วย Tailwind utility classes โดยใช้ React, TypeScript, Vite และ Tailwind CSS v4

## เริ่มต้นใช้งาน

ต้องใช้ Node.js และ npm ที่รองรับ Vite รุ่นปัจจุบัน

```bash
npm install
npm run dev
```

เปิด URL ที่ Vite แสดงใน terminal โดยปกติคือ `http://localhost:5173`

## คำสั่งสำคัญ

```bash
npm run dev       # เปิด development server
npm run lint      # ตรวจสอบ ESLint
npm run build     # ตรวจสอบ TypeScript และสร้าง production bundle
npm run preview   # preview production bundle ในเครื่อง
npm run storybook        # เปิด Storybook preview ที่ port 6006
npm run build-storybook  # build Storybook สำหรับตรวจสอบ production
npm run test:storybook   # รัน play tests ผ่าน Vitest + Playwright
```

## Tailwind CSS

Tailwind v4 ใช้ Vite plugin ที่ `vite.config.ts` และ import หลักใน `src/index.css`:

```css
@import "tailwindcss";
```

ไม่จำเป็นต้องสร้าง `tailwind.config.js` สำหรับ setup นี้

## โครงสร้างหลัก

- `src/App.tsx` — หน้า demo และ interaction ตัวอย่าง
- `src/index.css` — Tailwind import และ global design tokens
- `src/main.tsx` — entry point ที่ import CSS หลัก
- `vite.config.ts` — React และ Tailwind Vite plugins
- `.storybook/` — Storybook config, global CSS และ provider decorator
- `src/components/ui/*.stories.tsx` — stories ของ public UI components
- `DESIGN.md` — design tokens เบื้องต้น
- `AGENTS.md` — กฎการทำงานของ repository
- `MEMORY.md` — context และ workflow สำคัญ

## ความปลอดภัย

ห้าม commit `.env`, credentials, API keys, certificates, private keys หรือไฟล์ใน `secrets/` ดูกฎเพิ่มเติมใน `.gitignore` และ `AGENTS.md`

## Storybook MCP

Storybook เปิดใช้งาน `@storybook/addon-mcp` แล้ว โดย local MCP endpoint คือ `http://127.0.0.1:6006/mcp` ขณะ Storybook preview กำลังทำงาน
