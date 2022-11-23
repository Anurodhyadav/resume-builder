import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const DownloadButton = ({ buttonRef }) => {
  const handleDownloadPdf = async () => {
    if (!buttonRef.current) return;
    const element = buttonRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <button
      className="bg-[#0456f3] text-white h-[50px] p-2 rounded-sm"
      type="button"
      onClick={handleDownloadPdf}
    >
      Download PDF
    </button>
  );
};
export default DownloadButton;
