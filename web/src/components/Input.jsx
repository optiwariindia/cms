import React from "react";
import "../styles/component/input.scss";
import { uploadFile } from "../service";
export default function Input(attr){
    const [file,setFile]=React.useState(null);
    const [fileName,setFileName]=React.useState("");
    function fileUploaded(e){
        const newFile=e.target.files[0];
        setFile(newFile);
        const formData=new FormData();
        formData.append("file",newFile)
        uploadFile(formData);
        // Uploading file
    }
    function changeFile(e){
        // Get Target Element
        const imgElement=e.target;
        const formGroupElement=imgElement.parentElement;
        const fileInputElement=formGroupElement.querySelector("[type=file]");
        fileInputElement.click();
    }
    switch (attr.type) {
        case "file":
            return(
                <div className="form-group">
                    <label htmlFor={attr.id||attr.name}>{attr.label}</label>
                    <input 
                        type={attr.type||"text"} 
                        id={attr.id||attr.name} 
                        className="form-control hidden" 
                        accept={attr.accept}
                        onChange={fileUploaded}
                    />
                    <input type="hidden" name={attr.name} value={fileName} />
                    <img src={!!file?URL.createObjectURL(file):"/images/cloud-upload.png"} className="preview" onClick={changeFile} />
                    size:{file?.size?.toDataSize()}
                </div>
            )
        default:
            return(
                <div className="form-group">
                    <label htmlFor={attr.id||attr.name}>{attr.label}</label>
                    <input type={attr.type||"text"} id={attr.id||attr.name} name={attr.name} className="form-control" />
                </div>
            )
    }
}