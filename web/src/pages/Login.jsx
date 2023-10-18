import React from "react";
import { Form, Input } from "../components";

export default function Login(){
    return(<>
    <Form 
        title="Authentication Required"
        action="/api/v1/login"
        method="post"
    >
        <Input name="user" type="file" accept="image/*" />
    </Form>
    </>)
}