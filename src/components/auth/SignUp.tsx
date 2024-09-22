import React from 'react';
import { TextField, Button, Divider } from '@mui/material';
import { Apple, Google, Microsoft } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Footer from "../Footer"
import Navbar from "../Navbar"
import Header from "./Header"

const SignUp:React.FC = () => {

  interface userData {
    firstName:string,
    lastName: string;
    email: string;
    password: string;
    rePassword:string;
  }
  
  const [userData, setData] = React.useState<userData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword:"",
  });

  const [isVerified, setVerification] = React.useState<boolean>(false); // true mean verified user
  const [error, setError] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target;
    setData((prev)=>{
      return {...prev,[name]:value}
    })
    setError('');
  }

  const handleSubmit = () => {
    // API call to login
    if (!userData.email) {
      setError('Enter email address');
      return;
    }
    alert('verifying email');
    setVerification(true); // after email verification completion

  }
  return (
    <>
      <Navbar />
      <Header text="Sign Up" />

      <div className='w-full h-full pt-20 grid place-items-center'>
        <div className='w-[400px] h-full'>
          {
            !isVerified ? ( // email field for asking email
              <>
                <div className='flex flex-col justify-center items-center gap-6 pb-5'>
                  <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                  <TextField label="Email Address" color={!error ? 'success' : 'error'} className='w-[400px]' focused required
                    value={userData.email}
                    onChange={handleChange}
                    helperText={error}
                    name='email'
                    autoComplete='off'
                  />
                  <Button
                    variant="contained"
                    className="h-12 w-full text-2xl bg-primary text-white hover:bg-green-600"
                    onClick={handleSubmit} // Handle submit
                  >
                    Continue
                  </Button>
                  <p>Already have an account ?<Link to='/login' className='text-primary'> Login </Link></p>
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
              </>
            ) :
              ( // post email verification code for further user details.
                <div className='flex flex-col justify-center items-center gap-6 pb-5'>
                  <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                  <TextField label="First Name" color={!error ? 'success' : 'error'} className='w-[400px]' focused required
                    value={userData.firstName}
                    onChange={handleChange}
                    name='firstName'
                  />
                  <TextField label="Last Name" color={!error ? 'success' : 'error'} className='w-[400px]' focused required
                    value={userData.lastName}
                    onChange={handleChange}
                    name='lastName'
                  />
                  <TextField label="Password" color={!error ? 'success' : 'error'} className='w-[400px]' focused required
                    value={userData.password}
                    onChange={handleChange}
                    name='password'
                  />
                  <TextField label="Re-password" color={!error ? 'success' : 'error'} className='w-[400px]' focused required
                    value={userData.rePassword}
                    onChange={handleChange}
                    name='rePassword'
                  />
                  <Button
                    variant="contained"
                    className="h-12 w-full text-2xl bg-primary text-white hover:bg-green-600"
                    onClick={handleSubmit} // Handle submit
                  >
                    Continue
                  </Button>
                  <p>Already have an account ?<Link to='/login' className='text-primary'> Login </Link></p>
                </div>
              )
          }

        </div>
      </div>
      <Footer />
    </>
  )
}
export default SignUp