/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { ICountry, Country, City } from 'country-state-city';
import { Button, Divider } from '@mui/material';
import Footer from './Footer';
import Navbar from './Navbar';
import InputBox, { Select } from './Input';

// Define the formData structure using TypeScript interface
interface FormData {
  name: string;
  email: string;
  category: string;
  address: string;
  website: string;
  contact: string;
  country: string;
  city: string;
  type: string;
  recognition: string;
}

function PartnersForm() {
  const [CountryDetails, SetCountryDetails] = React.useState<ICountry>({
    name: '',
    phonecode: '',
    isoCode: '',
    flag: '',
    currency: '',
    latitude: '',
    longitude: '',
  });

  const [categories] = React.useState([
    'University',
    'Degree Awarding Institute',
    'College',
    'Institute',
    'School',
    'Academy',
    'Polytechnic',
    'Research Center',
    'Training Center',
    'Online Platform',
    'Vocational Institution',
  ]);

  const [formData, setData] = React.useState<FormData>({
    name: '',
    email: '',
    category: '',
    address: '',
    website: '',
    contact: '',
    country: '',
    city: '',
    type: '',
    recognition: '',
  });

  const [Cities, setCities] = React.useState<string[]>([]);
  const [CoutriesNames] = React.useState<string[]>(
    Country.getAllCountries().map((country) => country.name)
  );
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [callingCode, setCallingCode] = React.useState('');

  const formSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form', formData);

    try {
      const response = await fetch('http://localhost:5000/api/partners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setData({
          name: '',
          email: '',
          category: '',
          address: '',
          website: '',
          contact: '',
          country: '',
          city: '',
          type: '',
          recognition: '',
        });
        setError(null);
        setSuccess('Partner added successfully.');
      } else {
        throw new Error('Error saving data to MySQL');
      }
    } catch (error) {
      console.error('Error adding document: ', error);
      setError('Error saving data to the database.');
      setSuccess(null);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'contact') {
      const newValue = event.target.value.replace(/\D/g, ''); // Remove non-digits
      setData((prev) => ({ ...prev, [name]: newValue }));
      return;
    }
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setError(null);
    setData((prev) => ({ ...prev, [name]: value }));

    if (name === 'country' && value === 'Pakistan') {
      const countryDetail = Country.getAllCountries().find(
        (country) => country.name === value
      );
      const cities = City.getCitiesOfCountry('PK')?.map((city) => city.name);
      if (countryDetail) {
        SetCountryDetails(countryDetail);
        setCities(cities || []);
        setCallingCode('+' + countryDetail.phonecode);
      }
    } else if (name === 'country') {
      setCities([]);
      setCallingCode('');
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar />
      <div id='header' className='pt-10'>
        <div className='flex justify-between items-start px-10'>
          <div>
            <h1 className='text-[20px] font-bold uppercase'>Apply for partnership</h1>
          </div>
          <div className='text-end'>
            <h1 className='font-bold'>Your personal id</h1>
            <p>2378923487</p>
          </div>
        </div>
        <div className='w-full bg-primary flex flex-col justify-start items-start gap-4 px-10 py-5 text-white'>
          <button className='py-2 border-b-2 border-b-secondary outline-none'>
            Become Our Partner
          </button>
        </div>
      </div>

      <div className='md:flex gap-5 p-10 overflow-clip'>
        <Divider orientation='vertical' variant='middle' flexItem />
        <div className='w-[90%] sm:max-w-[800px] pl-10'>
          <form onSubmit={formSubmission}>
            <InputBox
              label='Name of institute'
              type='text'
              value={formData.name}
              placeholder='Enter Name of Your Institute'
              name='name'
              handleChange={handleChange}
            />
            <InputBox
              label='Email Address'
              type='email'
              value={formData.email}
              placeholder='Enter Email of Your Institute'
              name='email'
              handleChange={handleChange}
            />
            <Select
              label='Institute Category'
              options={categories}
              value={formData.category}
              name='category'
              handleSelect={handleSelect}
            />
            <InputBox
              label='Address'
              type='text'
              value={formData.address}
              placeholder='Enter Physical address of institution'
              name='address'
              handleChange={handleChange}
            />
            <InputBox
              label='Website'
              type='text'
              value={formData.website}
              placeholder='Enter website URL'
              name='website'
              handleChange={handleChange}
            />
            <Select
              label='Country'
              options={CoutriesNames}
              value={formData.country}
              name='country'
              handleSelect={handleSelect}
            />
            <InputBox
              label='Contact'
              type='text'
              value={formData.contact}
              placeholder='Enter contact number'
              name='contact'
              handleChange={handleChange}
              countryCode={callingCode}
              maxDigits={10}
            />
            <Select
              label='City'
              options={Cities}
              name='city'
              value={formData.city}
              handleSelect={handleSelect}
              placeholder={
                formData.country
                  ? formData.country === 'Pakistan'
                    ? ''
                    : 'Cities for your country will be added soon'
                  : 'Select country first'
              }
            />
            <Select
              name='type'
              value={formData.type}
              label='Select Institution Type'
              options={['public', 'private']}
              handleSelect={handleSelect}
            />
            <Select
              name='recognition'
              value={formData.recognition}
              label='Is Your Institute Recognized'
              options={['Yes', 'No']}
              handleSelect={handleSelect}
            />

            <Button variant='contained' type='submit'>
              Save
            </Button>
            <p className='text-red-600 text-sm'>{error}</p>
            <p className='text-green-600 text-sm'>{success}</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PartnersForm;
