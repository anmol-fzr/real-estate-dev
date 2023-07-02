import Input from './Input'
import useContactForm from '../hooks/useContactForm'


export default function Modal({ open, close }) {
    if (!open) return null
    const { register, errors, handleSubmit, onSubmit } = useContactForm({ close })

    const formInputs = [
        {
            name: 'name',
            type: 'text',
            placeholder: 'name',
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'email',
        },
        {
            name: 'phone',
            type: 'number',
            placeholder: 'phone',
        },
    ]


    return (
        <div className=' fixed top-0   min-h-screen z-[60] min-w-[100vw]  bg-black/50'>
            <form onSubmit={handleSubmit(onSubmit)} className="fixed z-50 flex w-full gap-2 p-4 overflow-auto -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 ">

                <>
                    <div className="flex justify-center flex-1 max-w-screen-lg mx-auto my-20 bg-white shadow sm:rounded-lg">
                        <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
                            <div className="flex flex-col items-center">
                                <h1 className="capitalize h1 hero-title " >Contact us</h1>
                                <div className="flex-1 w-full mt-6">
                                    <div className="flex flex-col max-w-xs gap-4 mx-auto ">
                                        {formInputs.map(({ name, type, placeholder }) => (
                                            <Input error={errors[ name ]?.message} {...{ name, type, placeholder, register }} />
                                        ))} 
                                        <button type='submit' className="text-center btn">Submit</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>


            </form>
        </div>
    )
}
