import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { RESUME_IMAGE_URL, RESUME_PDF_URL } from "../config";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(0);
  const resumePreviewSource = RESUME_IMAGE_URL || RESUME_PDF_URL;
  const canDownloadPdf = Boolean(RESUME_PDF_URL);
  const isPdfPreview = Boolean(RESUME_PDF_URL) && !RESUME_IMAGE_URL;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(120vh - 120px)",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>My Resume</h1>

      {/* Resume Viewer */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {resumePreviewSource ? (
          isPdfPreview ? (
            <Document
              file={RESUME_PDF_URL}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => console.error("Error loading PDF:", error)}
            >
              {numPages > 0 &&
                Array.from(new Array(numPages), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={600}
                  />
                ))}
            </Document>
          ) : (
            <img
              src={RESUME_IMAGE_URL}
              alt="Resume"
              style={{
                maxWidth: "100%",
                width: "900px",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
              }}
            />
          )
        ) : (
          <p style={{ textAlign: "center" }}>
            Add a Cloudinary image URL in <code>VITE_RESUME_IMAGE_URL</code> or a PDF URL in <code>VITE_RESUME_URL</code>.
          </p>
        )}
      </div>

      {/* Download Button */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a
          href={RESUME_PDF_URL || "#"}
          download="My_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
            pointerEvents: canDownloadPdf ? "auto" : "none",
            opacity: canDownloadPdf ? 1 : 0.6,
          }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
