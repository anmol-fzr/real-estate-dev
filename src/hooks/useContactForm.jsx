import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../schema"

import pdf from "../assets/brochure.pdf"

export default function useContactForm({ close }) {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    })


    const config = {
        // Username: 'ainsa2279@gmail.com',
        // Password: '25D31BFF6A21E6CC1F605159BB761952ECB7',
        // Host: 'smtp.elasticemail.com',
        // Port: '2525',
        SecureToken: "1844a482-ec82-424a-8150-924ece67f0fa",

        From: 'ainsa2279@gmail.com',
        To: "ainsa2279@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'pdf';
        link.href = pdf;
        link.click();
    };


    function onSubmit(data) {
        // console.log(data)
        // close()
        // handleDownload()
        if (window.Email) {
            window.Email.send(config).then(res => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
            console.log("Email Sent")
        }
    }

    return { register, handleSubmit, errors, onSubmit }
}
