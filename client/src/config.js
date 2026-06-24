const normalizeBaseUrl = (value, fallback) => {
  const base = (value || fallback).trim();
  return base.replace(/\/+$/, "");
};

export const API_BASE_URL = normalizeBaseUrl(
  import.meta.env.VITE_API_BASE_URL,
  "http://localhost:5000"
);

export const RESUME_IMAGE_URL = (
  import.meta.env.VITE_RESUME_IMAGE_URL ||
  "https://res.cloudinary.com/drgqsqxtx/image/upload/v1782288088/Screenshot_2026-06-24_133112_ta66ta.png"
).trim();

export const RESUME_PDF_URL = (import.meta.env.VITE_RESUME_URL || "").trim();
