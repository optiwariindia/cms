import React from "react";

export default function Input(attr){
    const [file,setFile]=React.useState(null);
    function fileUploaded(e){
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    switch (attr.type) {
        case "file":
            return(
                <div className="form-group">
                    <label htmlFor={attr.id||attr.name}>{attr.label}</label>
                    <input 
                        type={attr.type||"text"} 
                        id={attr.id||attr.name} name={attr.name} 
                        className="form-control hidden" 
                        accept={attr.accept}
                        onChange={fileUploaded}
                    />
                    <img src={!!file?URL.createObjectURL(file):""} className="preview" />
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