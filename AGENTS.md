# AGENTS.md

## บทบาทและขอบเขต

- Repository นี้เป็น React + TypeScript + Vite + Tailwind CSS v4
- ใช้ภาษาไทยในเอกสารและการสื่อสาร ยกเว้น technical terms, code และ proper names
- การแก้ไขต้องอยู่ภายใน repository root นี้เท่านั้น
- ห้ามลบหรือแก้ไขไฟล์นอก repository root

## คำสั่งมาตรฐาน

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

ต้องรัน `npm run build` หลังแก้ไขโค้ดก่อนรายงานว่างานสำเร็จ และต้องรายงานผลลัพธ์จริงเท่านั้น

## Coding standards

- ใช้ TypeScript แบบ strict และ component ที่อ่านง่าย แยกความรับผิดชอบชัดเจน
- ใช้ Tailwind utility classes สำหรับ UI ใน `src/` และเก็บ global tokens ใน `src/index.css`
- หลีกเลี่ยง hard-coded secrets, credentials และข้อมูลส่วนตัว
- ห้ามเพิ่ม dependency หากไม่จำเป็น และควรอัปเดต `package-lock.json` ให้ตรงกับ `package.json`

## UI/UX และ accessibility

- รองรับ responsive layout ตั้งแต่ mobile ถึง desktop
- ใช้ semantic HTML, accessible names, keyboard focus และ `aria-*` เท่าที่จำเป็น
- ตรวจสอบ contrast, focus-visible state และ readable typography
- ปุ่มที่เปลี่ยน state ต้องระบุ state ให้ screen reader เข้าใจ เช่น `aria-pressed`

## Files และ secrets

- `node_modules/`, `dist/`, `.env`, `.env.*`, `secrets/` และไฟล์ key/certificate ต้องไม่ถูก commit
- ใช้ `.env.example` ได้เฉพาะ placeholder ที่ไม่มี credential จริง
- ห้ามเขียน token จริงลงใน source, documentation, test หรือ commit history

## uSpec context

- `uspecs.config.json`, `.agents/skills/`, `.codex/skills/` และ `references/` เป็นไฟล์ที่ติดตั้งไว้ก่อนหน้าและต้องรักษาไว้
- อย่าเปลี่ยนค่า `uspecs.config.json` เว้นแต่ task ระบุโดยตรง
