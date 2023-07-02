import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../schema"

import pdf from "../assets/brochure.pdf"

export default function useContactForm({ close }) {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    })

    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'pdf';
        link.href = pdf;
        link.click();
    };


    function onSubmit(data) {
        console.log(data)
        close()
        handleDownload()
    }

    return { register, handleSubmit, errors, onSubmit }
}
