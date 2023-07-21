import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { object, number } from "yup";


import pdf from "../assets/brochure.pdf"
import config from "../config/emailjs.config"

export default function useModalForm({ close }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(object().shape({
            phone: number().typeError("Please Enter a Valid Phone number").test("len", "Must be exactly 10 digits", (val) => val.toString().length === 10).required()
        }))
    })

    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'pdf';
        link.href = pdf;
        link.click();
    };

    function onSubmit(data) {
        close()
        console.clear()
        if (window.Email) {
            const obj = config(data)
            window.Email.send(obj).then(res => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
        handleDownload()
        reset({
            name: '',
            email: '',
            phone: ''
        })
    }

    return { register, handleSubmit, errors, onSubmit }
}
