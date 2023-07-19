export default function Input({ register, type, name, placeholder, error }) {
    return (
        <div className="space-y-1" >
            <label htmlFor={name} className="capitalize" >{name}</label>
            <input   {...register(name)} {...{ type, name, placeholder }}
                className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg ouline-none focus:ouline-none placeholder:capitalize focus:border-gray-400 focus:bg-white"
            />
            {error && <p className='text-sm text-red-500 capitalize' >{error}</p>}
        </div>
    )
}
