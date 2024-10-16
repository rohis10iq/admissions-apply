import React, { FC, ChangeEvent } from 'react';
interface InputProps {
    label: string;
    type: string;
    value: string;  
    placeholder: string;
    styling?: string;
    name: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    countryCode?: string; // Add optional countryCode prop
    maxDigits?:number; // length of phone number
}

const InputBox: FC<InputProps> = ({ label, type, value, placeholder, styling, name, handleChange, countryCode,maxDigits }) => {
    const maxLength = maxDigits; // Maximum length for phone number
    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.replace(/\D/g, '').slice(0, maxLength);
        handleChange({
            target: {
                name,
                value: newValue,
            },
        });
    };


    return (
        <div className='my-4'>
            <label className="block text-[20px] font-normal mb-2">
                {label}
            </label>
            <div className="px-4 py-2 relative flex items-center border-2 border-secondary shadow-sm rounded-lg">
                {countryCode && (
                    <span className="mr-2 pr-2 border-r-2 border-secondary text-gray-600">{countryCode}</span>
                )}
                <input
                    type={type}
                    name={name}
                    value={value}
                    className={` w-full outline-none border-none bg-transparent placeholder:text-sm ${styling}`}
                    placeholder={placeholder}
                    onChange={countryCode ? handlePhoneChange : handleChange}
                    required
                    autoComplete='off'
                />
            </div>
        </div>
    );
};


interface select{
    name:string,
    value:string,
    label:string,
    options:string[] | undefined,
    handleSelect(event: React.ChangeEvent<HTMLSelectElement>):void;
}

export const Select:FC<select> =  ({name,value,label,options = [],handleSelect}) =>{
    return(
        <>
        <div className='my-4'>
            <label className="block text-[20px] font-normal mb-2">
                {label}
            </label>
            <select name={name} className='px-4 py-2 w-full max-h-24 outline-none border-2 border-secondary bg-transparent shadow-sm rounded-lg placeholder:text-sm font-light' 
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