export default async function (formData){
    let resp=await fetch("/api/v1/upload",{
        method:"POST",
        body:formData
    })
    console.log(resp);
}