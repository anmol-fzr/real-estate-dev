import Input from './Input'
import { useRef, useEffect } from "preact/hooks"
import useStore from '../store/store'
import useModalForm from '../hooks/useModalForm'

export const formInputs = [
    {
        name: 'phone',
        type: 'number',
        placeholder: 'phone',
    },
]

export default function NewModal({ download = false }) {
    const ref = useRef()
    const modal = useStore(state => state.modal)
    const setDownload = useStore(state => state.setDownload)
    const close = useStore(state => state.closeModal)

    const { register, errors, handleSubmit, onSubmit } = useModalForm({ close })

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                close()
                setDownload(false)
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => document.removeEventListener("mousedown", checkIfClickedOutside);
    }, [ modal ]);


    if (!modal) return null
    return (
        <div className=' fixed top-0 min-h-screen z-[60] min-w-[100vw]  bg-black/50 cursor-pointer '>
            <form onSubmit={handleSubmit(onSubmit)} className="fixed z-50 flex w-full gap-2 p-4 overflow-auto -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 ">
                <>
                    <div ref={ref} className="flex justify-center flex-1 w-full max-w-screen-sm mx-auto my-20 bg-white shadow sm:rounded-lg">
                        <div className="w-full p-6 sm:p-12">
                            <div className="flex flex-col items-center">
                                <h1 className=" h1 hero-title" >Connect with Our Experts</h1>
                                <div className="flex-1 w-full mt-6">
                                    <div className="flex flex-col w-full gap-4 mx-auto ">
                                        {formInputs.map(({ name, type, placeholder }) => (
                                            <Input key={name} error={errors[ name ]?.message} {...{ name, type, placeholder, register }} />
                                        ))}
                                        <button type='submit' className="mt-8 text-center btn">{download ? 'Download Brochure' : 'Send me Details'}</button>
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
