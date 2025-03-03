// src/Components/Ebooks/Pdfviewer.jsx
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

const PdfViewer = ({ pdfUrl }) => {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomIn, ZoomOut, ZoomPopover } = zoomPluginInstance;

  // Estilos personalizados
  const buttonStyle = {
    color: 'white',
  };

  return (
    <div style={{ height: 'auto', width: '100vw' }}>
      <Worker workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', backgroundColor: '#ffffff', width: '100%', margin: 'auto' }}>
          <ZoomOut style={buttonStyle} />
          <ZoomPopover style={buttonStyle} />
          <ZoomIn style={buttonStyle} />
        </div>
        <Viewer fileUrl={pdfUrl} plugins={[zoomPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
