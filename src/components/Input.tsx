import { FC } from 'react'

interface inputProps {
    label: string,
    type: string,
    Value : string | number,
    placeholder: string,
    styling?: string,
    name:string,
    handleChange(event: React.ChangeEvent<HTMLInputElement>):void;
}
const InputBox: FC<inputProps> = ({ label, type, Value , placeholder, styling , name , handleChange }) => {
    return (
        <>
            <div className='my-4'>
                <label className="block text-[20px] font-normal mb-2">
                    {label}
                </label>
                <div className="relative">
                    <input
                        type={type}
                        name={name}
                        value={Value}
                        className={`px-4 py-2 w-full outline-none border-2 border-secondary bg-transparent shadow-sm rounded-lg placeholder:text-sm ${styling}`}
                        placeholder={placeholder}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
        </>
    )
}


interface select{
    name:string,
    value:string,
    label:string,
    options:string[],
    handleSelect(event: React.ChangeEvent<HTMLSelectElement>):void;
}

export const Select:FC<select> =  ({name,value,label,options = [],handleSelect}) =>{
    return(
        <>
        <div className='my-4'>
            <label className="block text-[20px] font-normal mb-2">
                {label}
            </label>
            <select name={name} className='px-4 py-2 w-full outline-none border-2 border-secondary bg-transparent shadow-sm rounded-lg placeholder:text-sm font-light' 
                onChange={handleSelect}
                value={value}
            >
                <option selected hidden>Select</option>
                 {
                    options.map((option)=>{
                        return( 
                            <option key={option} value={option}>{option}</option>
                        )
                    })
                 }
            </select>
        </div>
        </>
    )
}
export default InputBox