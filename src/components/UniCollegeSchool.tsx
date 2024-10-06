// import React from 'react'
import {
    Box, Button, Divider, MenuItem, Select,
    Typography, Card, CardContent, Grid, IconButton,
    Pagination
} from '@mui/material';

import {
    FavoriteBorder, Favorite, SearchOutlined, Tune,
    DeleteOutline, SortOutlined, GridViewOutlined
} from '@mui/icons-material';

import Navbar from './Navbar'
import Footer from './Footer'
import imsciencesImage from '../assets/Emotions.png'
import iqraUniImage from '../assets/Sitting with open books.png'
import beconhouseImage from '../assets/beconhouse.png'
import edexSchoolImage from '../assets/Completely ready for school.png'
import imsciencesLogo from '../assets/imsciencesLogo.png'
import iqraUniLogo from '../assets/iqraUniLogo.png'
import beconhouseLogo from '../assets/beconhouseLogo.png'
import edexlogo from '../assets/edexSchoolLogo.png'

interface Institution {
    image: string;
    logo: string;
    title: string;
    location: string;
    type: string;
    since: string;
    link: string;
}

const data: Institution[] = [
    {
        image: imsciencesImage, // Replace with actual image link
        logo: imsciencesLogo,
        title: 'Imscience Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Semi-Government',
        since: 'Since 1980',
        link: 'Visit-website'
    },
    {
        image: iqraUniImage,
        logo: iqraUniLogo,
        title: 'Iqra University Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Private',
        since: 'Since 1998',
        link: 'Visit-website'
    },
    {
        image: beconhouseImage,
        logo: beconhouseLogo,
        title: 'Beaconhouse Lahore',
        location: 'Lahore, Pakistan',
        type: 'Private',
        since: 'Since 1990',
        link: 'Visit-website'
    },
    {
        image: edexSchoolImage,
        logo: edexlogo,
        title: 'Edex Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Private',
        since: 'Since 2000',
        link: 'Visit-website'
    },
    {
        image: imsciencesImage,
        logo: imsciencesLogo,
        title: 'Imscience Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Semi-Government',
        since: 'Since 1980',
        link: 'Visit-website'
    },
    {
        image: iqraUniImage,
        logo: iqraUniLogo,
        title: 'Iqra University Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Private',
        since: 'Since 1998',
        link: 'Visit-website'
    },
    {
        image: beconhouseImage,
        logo: beconhouseLogo,
        title: 'Beaconhouse Lahore',
        location: 'Lahore, Pakistan',
        type: 'Private',
        since: 'Since 1990',
        link: 'Visit-website'
    },
    {
        image: edexSchoolImage,
        logo: edexlogo,
        title: 'Edex Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Private',
        since: 'Since 2000',
        link: 'Visit-website'
    },
    {
        image: imsciencesImage, 
        logo: imsciencesLogo,
        title: 'Imscience Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Semi-Government',
        since: 'Since 1980',
        link: 'Visit-website'
    },
    {
        image: iqraUniImage,
        logo: iqraUniLogo,
        title: 'Iqra University Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Private',
        since: 'Since 1998',
        link: 'Visit-website'
    },
    {
        image: beconhouseImage,
        logo: beconhouseLogo,
        title: 'Beaconhouse Lahore',
        location: 'Lahore, Pakistan',
        type: 'Private',
        since: 'Since 1990',
        link: 'Visit-website'
    },
    {
        image: edexSchoolImage,
        logo: edexlogo,
        title: 'Edex Peshawar',
        location: 'Peshawar, Pakistan',
        type: 'Private',
        since: 'Since 2000',
        link: 'Visit-website'
    },

];


function UniCollegeSchool() {
    return (
        <>
            <Navbar />

            <div id='header' className='w-full h-[200px]'>
                <Box className="py-4 px-8">
                    {/* Search Title */}
                    <Typography variant="h3" fontWeight="bold">
                        Search
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className='pl-1'>
                        University , College and School
                    </Typography>
                </Box>
                <div className='bg-primaryLight flex justify-between items-center px-8 py-4'>
                    <form className="w-[400px]">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <SearchOutlined className='text-secondary' />
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-2 ps-10 text-sm text-white border border-none outline-none rounded-2xl bg-[#6D978B] placeholder:text-secondary focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="What are you looking for?"
                                required
                            />
                        </div>
                    </form>
                    <div>
                        <Button sx={{ ml: 2, color: '#ffffff' }}
                            className='gap-2 text-[12px]'
                            startIcon={<FavoriteBorder />}
                        >
                            Favourites
                        </Button>
                    </div>
                </div>
            </div> {/* header ends */}

            <Box className="px-10 py-6 -mt-6">
                {/* Top row: Search info and View toggle */}
                <Box className="flex justify-between items-center mb-4">
                    {/* Search info */}
                    <Typography variant="body1" className="">
                        <span className="text-green-400 cursor-pointer">Search all</span> | 22 results
                    </Typography>

                    {/* View and Sort options */}
                    <Box className="flex items-center space-x-4">
                        <Box className="flex items-center space-x-2">

                            <Button sx={{ color: '#000000' }}
                                className=' text-[12px]/'
                                startIcon={<SortOutlined />}
                            >
                                List
                            </Button>
                            <Button sx={{ color: '#00FFB6' }}
                                className='text-[12px]'
                                startIcon={<GridViewOutlined />}
                            >
                                Grid
                            </Button>
                        </Box>
                        <Typography variant="body2" className="">Sort by: <span className="text-[#00FFB6]">Relevence</span></Typography>
                    </Box>
                </Box>
                <Divider sx={{ mb: 3, }} />

                {/* Filter buttons */}
                <Box className="flex flex-wrap items-center gap-4 relative">
                    {/* Filters Button */}
                    <Button sx={{ color: '#00000', borderRadius: '50px', py: 1, border: 2 }}
                        variant='outlined'
                        color='inherit'
                        className='text-[12px] hover:bg-[#628D80] hover:border-transparent'
                        startIcon={<Tune />}
                    >
                        Filters
                    </Button>

                    {/* Dropdown Filters */}
                    <Select
                        size='small'
                        className="bg-transparent border-2 border-black"
                        defaultValue="Course"
                        sx={{
                            borderRadius: '50px', color: '#00000',
                            '& .MuiSelect-icon': {
                                color: 'black',  // Change the dropdown arrow color
                            },
                        }}
                    >
                        <MenuItem value="Course">Course</MenuItem>
                        <MenuItem value="Another">Another course</MenuItem>
                    </Select>

                    <Select
                        size='small'
                        className="bg-transparent border-2 border-black"
                        defaultValue="Program"
                        sx={{
                            borderRadius: '50px', color: '#00000',
                            '& .MuiSelect-icon': {
                                color: 'black',  // Change the dropdown arrow color
                            },
                        }}
                    >
                        <MenuItem value="Program">Program</MenuItem>
                        <MenuItem value="Another">Another</MenuItem>
                    </Select>

                    <Select
                        size='small'
                        className="bg-transparent border-2 border-black"
                        defaultValue="Country"
                        sx={{
                            borderRadius: '50px', color: '#00000',
                            '& .MuiSelect-icon': {
                                color: 'black',  // Change the dropdown arrow color
                            },
                        }}
                    >
                        <MenuItem value="Country">Country</MenuItem>
                        <MenuItem value="AnotherCountry">Another Country</MenuItem>
                    </Select>

                    <Select
                        size='small'
                        className="bg-transparent border-2 border-black"
                        defaultValue="City"
                        sx={{
                            borderRadius: '50px', color: '#00000',
                            '& .MuiSelect-icon': {
                                color: 'black',  // Change the dropdown arrow color
                            },
                        }}
                    >
                        <MenuItem value="City">City</MenuItem>
                        <MenuItem value="AnotherCity">Another City</MenuItem>
                    </Select>

                    <Select
                        size='small'
                        className="bg-transparent border-2 border-black"
                        defaultValue="Institute"
                        sx={{
                            borderRadius: '50px', color: '#00000',
                            '& .MuiSelect-icon': {
                                color: 'black',  // Change the dropdown arrow color
                            },
                        }}

                    >
                        <MenuItem value="Institute">Institute</MenuItem>
                        <MenuItem value="AnotherInstitute">Another Institute</MenuItem>
                    </Select>

                    {/* Clear Filters Button */}

                    <Button sx={{ color: 'grey',position:'absolute',right:2,top:1 }}
                        className=' text-[12px] hover:bg-[#628D80] hover:border-transparent ml-6'
                        startIcon={<DeleteOutline />}
                    >
                        Clear filters
                    </Button>
                </Box>
            </Box >

            <Grid container spacing={4} className="mt-6 p-14">
                {data.map((item, index) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                        <EducationCard {...item} />
                    </Grid>
                ))}
            </Grid>

            <Box className="grid place-items-center">    
                <Pagination count={5} variant="outlined" shape="rounded" />
            </Box>

            <Footer />
        </>
    )
}

export default UniCollegeSchool





const EducationCard: React.FC<Institution> = ({ image, logo, title, location, type, since, link }) => (
    <Card sx={{ boxShadow: 'none' }} className="relative rounded-lg overflow-hidden h-auto">
        <Box className="relative object-cover">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <img src={logo} alt={logo} className="w-16 sm:w-20 h-16 sm:h-20 object-cover absolute top-[55%] sm:top-[65%] left-8 rounded-md" />
        </Box>
        <CardContent sx={{ px: 0, }} className="text-left">
            <Typography variant="h6" className="font-bold">
                {title}
            </Typography>
            <Box className="flex justify-between">
                <Typography variant="body2" className="text-gray-600">
                    {location}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                    {since}
                </Typography>
            </Box>
            <Typography variant="body2" className="text-gray-600">
                {type}
            </Typography>
            <Typography variant="body2" className="text-blue-500 cursor-pointer mt-2">
                {link}
            </Typography>
            <IconButton sx={{ position: 'absolute', top: '2', right: '2' }} className="absolute top-2 right-2">
                <Favorite sx={{ color: 'black' }} />
            </IconButton>
        </CardContent>

    </Card>
);