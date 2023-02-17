import "./PdfButton.scss";
import { useRef } from "react";
import ImageViewer from "../marsPhotoViewer/ImageViewer";
export default function PdfButton (props:{handlePrint:()=>void}) {

	return(
		<div>
			<button onClick={()=>props.handlePrint} className="btn-pdf" type="submit">Make it a birthday card!</button>
		</div>
	)
}