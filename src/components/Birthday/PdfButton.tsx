import "./PdfButton.scss";
import { useRef } from "react";
import {useReactToPrint} from "react-to-print";

export default function PdfButton () {
    const imageRef:any = useRef();
    const handlePrint = useReactToPrint({
        content: () => imageRef.current,
    })

	return(
		<div>
            {/* <ComponentToPrint ref={imageRef}></> */}
			<button onClick={()=>handlePrint} className="btn-pdf" type="submit">Make it a birthday card!</button>
		</div>
	)
}