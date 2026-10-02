# MEMORY.md

## Repository context

- Stack: React, TypeScript, Vite 8, Tailwind CSS v4
- Tailwind integration: `@tailwindcss/vite` ใน `vite.config.ts`
- Global CSS entry: `src/index.css` ใช้ `@import "tailwindcss";`
- App entry: `src/main.tsx` import `./index.css` ก่อน render `App`
- Existing uSpec setup is preserved in `.agents/`, `.codex/`, `references/` และ `uspecs.config.json`

## Workflow

1. อ่าน `AGENTS.md` และตรวจสถานะไฟล์ก่อนแก้ไข
2. ใช้ `npm install` เมื่อต้องติดตั้ง dependencies และรักษา `package-lock.json`
3. ตรวจ `npm run lint` และ `npm run build` หลังแก้ไข frontend
4. ตรวจ responsive layout, semantic HTML, keyboard focus และ contrast ก่อนส่งมอบ
5. ห้าม commit secrets หรือแก้ไขไฟล์นอก repository root

## Current demo

- หน้า demo อยู่ใน `src/App.tsx`
- มีตัวอย่าง layout, surface, typography, responsive classes และ interactive `aria-pressed` state
- Design tokens เบื้องต้นอยู่ใน `DESIGN.md` และ `src/index.css`
