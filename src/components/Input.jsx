export default function Input({ register, type, name, placeholder, error }) {
    return (
        <div className="space-y-1" >
            <label htmlFor={name} className="capitalize" >{name}</label>
            <input id={name} {...register(name)} {...{ type, name, placeholder }} className="w-full h-10 px-4 font-thin transition-all duration-200 ease-in-out border-2 border-gray-300 rounded-md outline-none placeholder:capitalize peer bg-gray-50 drop-shadow-sm focus:bg-white focus:border-primary/50" />
            {error && <p className='text-sm text-red-500' >{error}</p>}
        </div>
    )
}
