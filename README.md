# Portfolio

This project has two apps:

- `client` - Vite + React frontend
- `server` - Express backend for the contact form

## Run locally

1. Install dependencies in both folders:

```powershell
cd client
npm install

cd ..\server
npm install
```

2. Create `server/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
# or MONGO_URL=your_mongodb_connection_string
FRONTEND_URL=https://your-vercel-app.vercel.app
SMTP_EMAIL=your_gmail_address
SMTP_PASS=your_gmail_app_password
TO_EMAIL=your_receiving_email_address
```

3. Create `client/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_RESUME_URL=https://drive.google.com/file/d/11-Zgb5l1-isSiRHPZSmHa4F4W2ArpRPn/view?usp=sharing
```

4. Start the backend:

```powershell
cd server
npm run dev
```

5. Start the frontend in a second terminal:

```powershell
cd client
npm run dev
```

## Notes

- The contact form posts to `VITE_API_BASE_URL`.
- `TO_EMAIL` is the inbox that receives the contact messages.
- If `SMTP_EMAIL` is empty, the server will fall back to `TO_EMAIL` as the Gmail sender account.
- If you already have `MONGO_URL` in your `.env`, the server will use that too.
- The resume page now loads the Google Drive file through your backend, so the browser never talks to Drive directly.
- Set `VITE_RESUME_URL` in `client/.env` to your Drive share link.
