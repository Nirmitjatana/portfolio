import React from 'react';
import WhiteButton from '../components/whiteButton';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
    const pdf = "https://raw.githubusercontent.com/Nirmitjatana/portfolio/main/src/data/Nirmit_Jatana_Resume.pdf"
    return(
        <>
            <div>
                <h1 className='text-white'>Resume 📝</h1>
                <WhiteButton text="Download PDF" download={pdf}/>
            </div>
            <div>
                <Document file={pdf}>
                    <Page pageNumber={1}/>
                </Document>
            </div>
        </>
    )
}


export default Resume