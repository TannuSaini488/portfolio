const normalizeBaseUrl = (value, fallback) => {
  const base = (value || fallback).trim();
  return base.replace(/\/+$/, "");
};

const DEFAULT_RESUME_SHARE_URL =
  "https://drive.google.com/file/d/11-Zgb5l1-isSiRHPZSmHa4F4W2ArpRPn/view?usp=sharing";

export const API_BASE_URL = normalizeBaseUrl(
  import.meta.env.VITE_API_BASE_URL,
  "http://localhost:5000"
);

export const RESUME_SOURCE_URL = (
  import.meta.env.VITE_RESUME_URL || DEFAULT_RESUME_SHARE_URL
).trim();

export const RESUME_PREVIEW_URL = `${API_BASE_URL}/api/resume?url=${encodeURIComponent(
  RESUME_SOURCE_URL
)}`;

export const RESUME_DOWNLOAD_URL = `${API_BASE_URL}/api/resume/download?url=${encodeURIComponent(
  RESUME_SOURCE_URL
)}`;
