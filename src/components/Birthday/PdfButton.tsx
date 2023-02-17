import "./PdfButton.scss";
import { useRef } from "react";
import {useReactToPrint} from "react-to-print";
import { MarsViewer } from "../marsPhotoViewer/marsViewer";

export default function PdfButton () {
    const imageRef:any = useRef();
    const handlePrint = useReactToPrint({
        content: () => imageRef.current,
    })

	return(
		<div>
            {/* <MarsViewer ref={imageRef}></> */}
			<button onClick={()=>handlePrint} className="btn-pdf" type="submit">Make it a birthday card!</button>
		</div>
	)
}