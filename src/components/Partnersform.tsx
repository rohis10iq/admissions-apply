import * as React from 'react';
import { Button, Divider } from '@mui/material';
import Footer from "./Footer";
import Navbar from "./Navbar";
import InputBox, { Select } from './Input';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

// Define the formData structure using TypeScript interface
interface FormData {
    code: string;
    name: string;
    category: string;
    address: string;
    website: string;
    contact: string;
    country: string;
    city: string;
    type: string;
    recognition: string;
    status: string;
    paidstatus: string;
}

function PartnersForm() {
    // Initialize form data and error state
    const [formData, setData] = React.useState<FormData>({
        code: '',
        name: '',
        category: '',
        address: '',
        website: '',
        contact: '',
        country: '',
        city: '',
        type: '',
        recognition: '',
        status: '',
        paidstatus: '',
    });
    
    const [error, setError] = React.useState<string>('');

    React.useEffect(() => {
        window.scrollTo({ top: 0 });
        if (localStorage.getItem('partners') == null) {
            localStorage.setItem('partners', JSON.stringify([]));
        }
    }, []);

    // Handle form submission to Firebase and LocalStorage
    const formSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Validation for missing inputs
        if (formData.type === '' || formData.paidstatus === '' || formData.recognition === '' || formData.status === '') {
            setError('Oops! You missed some inputs.');
            return;
        }

        try {
            // Save formData to Firestore
            const docRef = await addDoc(collection(db, "partners"), formData);
            console.log("Document written with ID: ", docRef.id);

            // Save formData to localStorage
            const partners = JSON.parse(localStorage.getItem('partners') || '[]');
            const newPartners = [...partners, formData];
            localStorage.setItem('partners', JSON.stringify(newPartners));

            // Reset form after submission
            setData({
                code: '',
                name: '',
                category: '',
                address: '',
                website: '',
                contact: '',
                country: '',
                city: '',
                type: '',
                recognition: '',
                status: '',
                paidstatus: '',
            });
            setError('');
            alert('Partner added successfully');
        } catch (error) {
            console.error("Error adding document: ", error);
            setError('Error saving data to Firebase');
        }
    };

    // Handle input changes for text fields
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    // Handle select changes
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setError('');
        setData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <Navbar />
            <div id='header' className='pt-10'>
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
                        <button className='px-4 py-2 bg-white text-black rounded-sm'>Institute Profile</button>
                        <button className='px-4 py-2 '>About the institute</button>
                        <button className='px-4 py-2 '>Student statistics</button>
                    </div>
                </div>
            </div>

            <div className='md:flex gap-5 p-10 overflow-clip'>
                <aside className='p-5 flex md:flex-col flex-wrap items-start max-w-[250px] h-full overflow-hidden'>
                    <Button variant='text' color="success">Institute Profile</Button>
                    <Button variant="text" color="secondary">Add Hostel & Room Detail</Button>
                    <Button variant="text" color="secondary">Page Header</Button>
                    <Button variant="text" color="secondary">Legal Section</Button>
                    <Button variant="text" color="secondary">Statistics</Button>
                    <Button variant="text" color="secondary">Add Department</Button>
                    <Button variant="text" color="secondary">Add Courses</Button>
                    <Button variant="text" color="secondary">Course Elegibility</Button>
                    <Button variant="text" color="secondary">Fee and Payment</Button>
                </aside>

                <Divider orientation="vertical" variant="middle" flexItem />

                <div className="w-[90%] sm:max-w-[450px] sm:min-w-[500px] pl-10">
                    <form onSubmit={formSubmission}>
                        <InputBox label='Code' type='text' Value={formData.code} placeholder='Enter Code of Your Institute' name='code' handleChange={handleChange} />
                        <InputBox label='Name of institute' type='text' Value={formData.name} placeholder='Enter Name of Your Institute' name='name' handleChange={handleChange} />
                        <InputBox label='Institute Category' type='text' Value={formData.category} placeholder='Choose your institute Category' name='category' handleChange={handleChange} />
                        <InputBox label='Address' type='text' Value={formData.address} placeholder='Enter Physical address of institution' name='address' handleChange={handleChange} />
                        <InputBox label='Website' type='text' Value={formData.website} placeholder='Enter website URL' name='website' handleChange={handleChange} />
                        <InputBox label='Contact' type='number' Value={formData.contact} placeholder='Enter contact number of institution' name='contact' handleChange={handleChange} />
                        <InputBox label='Country' type='text' Value={formData.country} placeholder='Enter country where institute is located' name='country' handleChange={handleChange} />
                        <InputBox label='City' type='text' Value={formData.city} placeholder='Enter City where institution is located' name='city' handleChange={handleChange} />
                        
                        <Select name='type' value={formData.type} label='Select Institution Type' options={['public', 'private']} handleSelect={handleSelect} />
                        <Select name='recognition' value={formData.recognition} label='Is Your Institute Recognized' options={['Yes', 'No']} handleSelect={handleSelect} />
                        <Select name='status' value={formData.status} label='Status' options={['Active', 'Non-Active']} handleSelect={handleSelect} />
                        <Select name='paidstatus' value={formData.paidstatus} label='Paid Status' options={['Paid', 'Free']} handleSelect={handleSelect} />
                        
                        <Button variant="contained" type='submit'>Save</Button>
                        <p className='text-red-600 text-sm'>{error}</p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PartnersForm;
