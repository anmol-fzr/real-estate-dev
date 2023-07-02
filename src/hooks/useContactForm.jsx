import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../schema"

export default function useContactForm() {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmit(data) {
        console.log(data)
    }

    return { register, handleSubmit, errors, onSubmit }
}
