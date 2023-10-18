import React from "react";

export default function Form(attr){
    return(
        <form method={attr.method} action={attr.action} data-tst-title={attr.title.slug()}>
            <div className="title">{attr.title}</div>
            <div className="frm-body">
                {attr.children}
            </div>
        </form>
    )
}