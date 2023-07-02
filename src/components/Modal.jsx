import Input from './Input'
import useContactForm from '../hooks/useContactForm'


export default function Modal({ open }) {
    if (!open) return null
    const { register, errors, handleSubmit, onSubmit } = useContactForm()

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
                {/* <div className='flex flex-col items-center w-full' >
                    <h1 className="capitalize h1 hero-title " >Contact Us</h1>
                    {formInputs.map(({ name, type, placeholder }) => (
                        <Input error={errors[ name ]?.message} {...{ name, type, placeholder, register }} />
                    ))}
                </div> */}
                <div style={{ width: '400px' }} className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 mx-auto text-gray-900 bg-gray-100 rounded-lg shadow-lg ">
                    <div className="">
                        <div>
                            <span className="text-sm font-bold text-gray-600 uppercase">
                                Full Name
                            </span>
                            <input
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="mt-8">
                            <span className="text-sm font-bold text-gray-600 uppercase">Email</span>
                            <input
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                            />
                        </div>
                        <div className="mt-8">
                            <span className="text-sm font-bold text-gray-600 uppercase">Message</span>
                            <textarea
                                className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
                                defaultValue={""}
                            />
                        </div>
                        <div className="mt-8">
                            <button className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-indigo-500 rounded-lg focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}
