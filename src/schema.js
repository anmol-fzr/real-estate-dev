import { string, object, number } from "yup";

const regex = {
    email: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
};

export default object().shape({
    name: string().required(),
    email: string().email().matches(regex.email, "Please Enter a valid Email Address").required(),
    phone: number().typeError("Please Enter a Valid Phone number").test("len", "Must be exactly 10 digits", (val) => val.toString().length === 10).required()
})