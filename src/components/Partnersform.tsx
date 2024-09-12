import * as React from 'react';
import Button from '@mui/material/Button';
import Container from "./Container"
import Footer from "./Footer"
import Navbar from "./Navbar"
import InputBox from './InputBox';

interface form{
    code:string,
    name:string,
    category:string,
    address:string,
    website:string,
    contact:string,
    country:string,
    city:string,
    type:string,
    recognition:string,
    status:string,
    paidstatus:string

}
function Partnersform() {

    const [formData , setData] = React.useState<form>({});
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target;
        setData((prev)=>{
            return {...prev, [name]:value}
        })
    };

    function formSubmittion(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(formData);

        setData({
            'code': '',
            'name': '',
            'category': '',
            'address': '',
            'website':'',
            'contact':'',
            'country': '',
            'city': '',
            'type': '',
            'recognition': '',
            'status': '',
            'paidstatus':'',
            })
        return;
    }

    return (
        <>
        <Navbar />
            <div>
                <div className="flex justify-between items-start px-10">
                    <div>
                        <h1 className="text-[40px] font-extrabold">Form</h1>
                    </div>
                    <div className="text-end">
                        <h1 className="font-bold">Your personal id</h1>
                        <p>2378923487</p>
                    </div>
                </div>
                <div className='w-full bg-primary flex flex-col justify-start items-start gap-4 px-10 text-white'>
                    <button className='py-2 border-b-2 border-b-secondary outline-none'>Add your program</button>
                    <p>Personalize your dashboard</p>
                    <div id='tab-buttons' className='flex'>
                        <button className='px-4 py-2 bg-secondary text-black'>Institute Profile</button>
                        <button className='px-4 py-2 '>About the institute</button>
                        <button className='px-4 py-2 '>Student statistics</button>
                    </div>
                </div>
            </div>
            <Container>
                <div className="max-w-[450px] space-y-3">
                   <form onSubmit={(e)=>formSubmittion(e)}> 
                        <InputBox label='Code'  type='text' Value={formData.code} placeholder='Enter Code of Your Institute'  name='code' handleChange={handleChange}/>

                        <InputBox label='Name of institute' type='text' Value={formData.name} placeholder='Enter Name of Your Institute' name='name' handleChange={handleChange}/>

                        <InputBox label='Institute Category' type='text' Value={formData.category} placeholder='Choose yout institute Category ' name='category' handleChange={handleChange}/>

                        <InputBox label='Address' type='text' Value={formData.address} placeholder='Enter Physical address of institution' name='address' handleChange={handleChange}/>
                        
                        <InputBox label='Website' type='text' Value={formData.website} placeholder='Enter website url' name='website' handleChange={handleChange}/>
                        
                        <InputBox label='Contact' type='number' Value={formData.contact} placeholder='Enter contact number of institution' name='contact' handleChange={handleChange}/>
                        
                        <InputBox label='Country' type='text' Value={formData.country} placeholder='Enter country where institute is located' name='country' handleChange={handleChange}/>
                        
                        <InputBox label='City' type='text' Value={formData.city} placeholder='Enter City where institution is located' name='city' handleChange={handleChange}/>
                        
                        <InputBox label='Type' type='text' Value={formData.type} placeholder='Choose type of institution' name='type' handleChange={handleChange}/>
                        
                        <InputBox label='Recognition' type='text' Value={formData.recognition} placeholder='Institution is Recognized' name='recognition' handleChange={handleChange}/>
                        
                        <InputBox label='Status' type='text' Value={formData.status} placeholder='Enter' name='status' handleChange={handleChange}/>   
                        
                        <InputBox label='Paid Status' type='text' Value={formData.paidstatus} placeholder='Enter' name='paidstatus' handleChange={handleChange}/>   
                        
                        <Button variant="contained" type='submit'>Save</Button>
                    </form>
                </div>
            </Container>
        <Footer />
        </>
    )
}

export default Partnersform