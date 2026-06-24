import { useState } from "react";
import { Document, Page } from "react-pdf";
import { RESUME_DOWNLOAD_URL, RESUME_PREVIEW_URL, RESUME_SOURCE_URL } from "../config";
import "../pdf-worker";

export default function Resume() {
  const resumePreviewUrl = RESUME_PREVIEW_URL;
  const resumeDownloadUrl = RESUME_DOWNLOAD_URL;
  const hasResume = Boolean(RESUME_SOURCE_URL);
  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages: pages }) => {
    setNumPages(pages);
  };

  return (
    <div className="min-h-[calc(120vh-120px)] px-5 py-6 bg-base-200 text-base-content flex flex-col">
      <h1 className="text-center text-3xl font-bold mb-5">My Resume</h1>

      {/* Resume Viewer */}
      <div className="flex flex-1 items-center justify-center overflow-y-auto py-2">
        {hasResume ? (
          <div className="card w-full max-w-5xl bg-base-100 shadow-xl border border-base-300">
            <div className="card-body p-4 md:p-6">
            <Document
              file={resumePreviewUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => console.error("Resume preview failed:", error)}
              loading={<p className="m-0 text-center text-base-content/70">Loading resume...</p>}
              error={<p className="m-0 text-center text-base-content/70">Resume preview could not be loaded.</p>}
            >
              {Array.from({ length: numPages }, (_, index) => (
                <div key={`page_${index + 1}`} className="flex justify-center">
                  <Page
                    pageNumber={index + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={860}
                  />
                </div>
              ))}
            </Document>
            </div>
          </div>
        ) : (
          <p className="text-center text-base-content/70">
            Add a Google Drive resume URL in <code>VITE_RESUME_URL</code>.
          </p>
        )}
      </div>

      {/* Download Button */}
      <div className="mt-3 text-center">
        <a
          href={resumeDownloadUrl || "#"}
          download="My_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={`btn btn-primary ${hasResume ? "" : "btn-disabled"}`}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
