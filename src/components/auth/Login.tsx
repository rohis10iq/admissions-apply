import React from 'react';
import { TextField, Button, Divider } from '@mui/material';
import { Apple, Google, Microsoft } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Footer from "../Footer"
import Navbar from "../Navbar"
import Header from "./Header"

function Login() {


  const [email, setEmail] = React. useState<string>('');
  const [error,setError] = React.useState<string>('')
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const email = event.target.value;
    setEmail(email)
    setError('');
  } 

  const handleSubmit = () => {
    // API call to login
    if(!email){
      setError('Enter email address');
      return;
    }
    setTimeout(()=>{
      alert("Login Successfull");
      setEmail('')
    },1000)
  }

  return (
    <>
      <Navbar />
      <Header text="welcome back" />

      <div className='w-full h-full pt-20 grid place-items-center'>
        <div className='w-[400px] h-full'>

          <div className='flex flex-col justify-center items-center gap-6 pb-5'>
            <h1 className='text-3xl font-bold text-center'>Log in</h1>

            <TextField label="Email Address" color={!error?'success':'error'} className='w-[400px]' focused required
              value={email}  
              onChange={handleChange}
              helperText={error}
              autoComplete='off'
            />

            <Button
              variant="contained"
              className="h-12 w-full text-2xl bg-primary text-white hover:bg-green-600"
              onClick={handleSubmit} // Handle submit
            >
              Continue
            </Button>
            <p>Don't have an account ?<Link to='/sign-up' className='text-primary'> signup </Link></p>
          </div>

          <Divider> OR </Divider>

          <div className='w-[400px] pt-5 flex flex-col gap-4'>
            <Button variant='outlined'
              sx={{
                justifyContent: 'flex-start',
                color: 'black',
                padding: '10px 20px'
              }}
              startIcon={<Google />}>
              Login with Google
            </Button>
            <Button variant='outlined'
              sx={{
                justifyContent: 'flex-start',
                color: 'black',
                padding: '10px 20px'
              }}
              startIcon={<Microsoft />}>
              Login with Microsoft
            </Button>

            <Button variant='outlined'
              sx={{
                justifyContent: 'flex-start',
                color: 'black',
                padding: '10px 20px'
              }}
              startIcon={<Apple />}>
              Login with Apple
            </Button>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Login