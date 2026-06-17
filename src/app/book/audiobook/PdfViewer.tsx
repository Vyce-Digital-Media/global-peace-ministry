'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
   containerWidth: number;
   pagesToRender: number[];
   targetPage: number;
   onDocumentLoadSuccess: (info: { numPages: number }) => void;
   scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function PdfViewer({ containerWidth, pagesToRender, targetPage, onDocumentLoadSuccess, scrollContainerRef }: PdfViewerProps) {
   const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
   const [loadedPages, setLoadedPages] = useState<Record<number, boolean>>({});
   const [lastScrolledPage, setLastScrolledPage] = useState<number | null>(null);

   const scrollToPage = (pageNum: number) => {
      const pageEl = pageRefs.current[pageNum - 1];
      const scrollContainer = scrollContainerRef.current;
      if (pageEl && scrollContainer) {
         // Calculate target scroll position accurately
         const containerTop = scrollContainer.getBoundingClientRect().top;
         const elTop = pageEl.getBoundingClientRect().top;
         const scrollTop = scrollContainer.scrollTop + (elTop - containerTop) - 24; // 24px for padding
         
         scrollContainer.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
   };

   // Reset scroll state when target changes
   useEffect(() => {
      setLastScrolledPage(null);
   }, [targetPage]);

   // Scroll when page is ready
   useEffect(() => {
      if (loadedPages[targetPage] && lastScrolledPage !== targetPage) {
         // Small delay to ensure layout rendering has settled
         const timeoutId = setTimeout(() => {
            scrollToPage(targetPage);
            setLastScrolledPage(targetPage);
         }, 150);
         return () => clearTimeout(timeoutId);
      }
   }, [targetPage, loadedPages, lastScrolledPage]);

   return (
      <Document
         file="/books/Final World Peace Book content.pdf"
         onLoadSuccess={onDocumentLoadSuccess}
         className="flex flex-col items-center gap-6 w-full"
         loading={
            <div className="flex items-center justify-center h-full w-full py-20">
               <div className="animate-pulse text-cream font-serif text-lg">Loading Book...</div>
            </div>
         }
      >
         {pagesToRender.map((pageNum) => (
            <div 
               key={`page_${pageNum}`} 
               ref={el => {
                  pageRefs.current[pageNum - 1] = el;
               }}
               className="shadow-2xl bg-white"
            >
               <Page
                  pageNumber={pageNum}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={containerWidth}
                  onLoadSuccess={() => {
                     setLoadedPages(prev => ({ ...prev, [pageNum]: true }));
                  }}
               />
            </div>
         ))}
      </Document>
   );
}
