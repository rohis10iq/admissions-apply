import { Box, Button, MenuItem, Select, Typography, Grid, Stack, Pagination } from '@mui/material';
import { FavoriteBorder, SearchOutlined, Tune, DeleteOutline, SortOutlined, GridViewOutlined } from '@mui/icons-material';
import Navbar from './Navbar'
import Footer from './Footer'
import CourseCard from './Course2Card'
import courseImage from '../assets/iqraUni.png'
import iqraUnilogo from '../assets/iqraUniLogo.png'

interface Course {
    title: string;
    site: string;
    degree: string;
    duration: string;
    credits: string;
    dateRange: string;
}

const Course2: React.FC = () => {

    const courses: Course[] = [
        {
            title: 'Accountancy',
            site: 'Main Site',
            degree: 'BS in Fashion Art',
            duration: '4 Years',
            credits: '130',
            dateRange: '1/9/24 - 29/10/24',
        }, {
            title: 'Accountancy',
            site: 'Main Site',
            degree: 'BS in Fashion Art',
            duration: '4 Years',
            credits: '130',
            dateRange: '1/9/24 - 29/10/24',
        },
        {
            title: 'Accountancy',
            site: 'Main Site',
            degree: 'BS in Fashion Art',
            duration: '4 Years',
            credits: '130',
            dateRange: '1/9/24 - 29/10/24',
        },
        // Add more course objects here as needed
    ];
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
                        Courses and Information
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

            <Box className="bg-primary px-10 py-6 -mt-6">
                {/* Top row: Search info and View toggle */}
                <Box className="flex justify-between items-center mb-4">
                    {/* Search info */}
                    <Typography variant="body1" className="text-white">
                        <span className="text-green-400 cursor-pointer">Search all</span> | 180 courses
                    </Typography>

                    {/* View and Sort options */}
                    <Box className="flex items-center space-x-4">
                        <Box className="flex items-center space-x-2">

                            <Button sx={{ color: '#00FFB6' }}
                                className=' text-[12px]'
                                startIcon={<SortOutlined />}
                            >
                                List
                            </Button>
                            <Button sx={{ color: '#ffffff' }}
                                className='text-[12px]'
                                startIcon={<GridViewOutlined />}
                            >
                                Grid
                            </Button>
                        </Box>
                        <Typography variant="body2" className="text-white">Sort by: <span className="text-[#00FFB6]">Best match</span></Typography>
                    </Box>
                </Box>

                {/* Filter buttons */}
                <Box className="flex flex-wrap items-center gap-4 w-auto ">
                    {/* Filters Button */}
                    <Button sx={{ color: '#ffffff', borderRadius: '50px', py: 1, border: 2 }}
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
                        className="bg-transparent border-2 border-white"
                        defaultValue="Course"
                        sx={{ borderRadius: '50px', color: 'white' }}
                    >
                        <MenuItem value="Course">Course</MenuItem>
                        <MenuItem value="Another">Another course</MenuItem>
                    </Select>

                    <Select
                        size='small'
                        className="bg-transparent border-2 border-white"
                        defaultValue="Session"
                        sx={{ borderRadius: '50px', color: 'white' }}
                    >
                        <MenuItem value="Session">Session</MenuItem>
                        <MenuItem value="AnotherSession">Another Session</MenuItem>
                    </Select>

                    <Select
                        size='small'
                        className="bg-transparent border-2 border-white"
                        defaultValue="Country"
                        sx={{ borderRadius: '50px', color: 'white' }}
                    >
                        <MenuItem value="Country">Country</MenuItem>
                        <MenuItem value="AnotherCountry">Another Country</MenuItem>
                    </Select>

                    <Select
                        size='small'
                        className="bg-transparent border-2 border-white"
                        defaultValue="City"
                        sx={{ borderRadius: '50px', color: 'white' }}
                    >
                        <MenuItem value="City">City</MenuItem>
                        <MenuItem value="AnotherCity">Another City</MenuItem>
                    </Select>

                    <Select
                        size='small'
                        className="bg-transparent border-2 border-white"
                        defaultValue="Institute"
                        sx={{ borderRadius: '50px', color: 'white' }}

                    >
                        <MenuItem value="Institute">Institute</MenuItem>
                        <MenuItem value="AnotherInstitute">Another Institute</MenuItem>
                    </Select>

                    {/* Clear Filters Button */}

                    <Button sx={{ color: '#ffffff' }}
                        color='inherit'
                        className=' text-[12px] hover:bg-[#628D80] hover:border-transparent ml-6'
                        startIcon={<DeleteOutline />}
                    >
                        Clear filters
                    </Button>
                </Box>
            </Box >

            {/* courses list */}
            <Box className="bg-primary p-10">
                <Grid container spacing={2} mb={4}>
                    {/* Left Side with Image */}
                    <Grid item xs={12} md={4} className='relative h-[480px]'>
                        <img src={courseImage} alt="Classroom" className='w-full h-full object-cover rounded-md shadow-md' />
                        <Box className='flex gap-2 items-center absolute bottom-8 left-20 text-white text-2xl'>
                            <img src={iqraUnilogo} alt={iqraUnilogo} />
                            <Box>
                                <Typography variant="h5" >
                                    Iqra University
                                </Typography>
                                <Typography color="textSecondary">20 courses | Peshawar</Typography>
                            </Box>

                        </Box>
                    </Grid>

                    {/* Right Side with Course List */}
                    <Grid item xs={12} md={8}>
                        <Stack>
                            {courses.map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))}

                            {/* Show More Button */}
                            <Box display="flex" justifyContent="flex-end">
                                <Button sx={{ color: '#ffffff', background: '#7ab1a2', py: '25px' }}
                                    color='inherit'
                                    className='w-full text-[12px]  hover:bg-[#628D80] hover:border-transparent ml-6'
                                >
                                    Show More
                                </Button>
                            </Box>
                        </Stack>

                    </Grid>
                </Grid>

                <Grid container spacing={2} mb={4}>
                    {/* Left Side with Image */}
                    <Grid item xs={12} md={4} className='relative h-[480px]'>
                        <img src={courseImage} alt="Classroom" className='w-full h-full object-cover rounded-md shadow-md' />
                        <Box className='flex gap-2 items-center absolute bottom-8 left-20 text-white text-2xl'>
                            <img src={iqraUnilogo} alt={iqraUnilogo} />
                            <Box>
                                <Typography variant="h5" >
                                    Iqra University
                                </Typography>
                                <Typography color="textSecondary">20 courses | Peshawar</Typography>
                            </Box>

                        </Box>
                    </Grid>

                    {/* Right Side with Course List */}
                    <Grid item xs={12} md={8}>
                        <Stack>
                            {courses.map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))}

                            {/* Show More Button */}
                            <Box display="flex" justifyContent="flex-end">
                                <Button sx={{ color: '#ffffff', background: '#7ab1a2', py: '25px' }}
                                    color='inherit'
                                    className='w-full text-[12px]  hover:bg-[#628D80] hover:border-transparent ml-6'
                                >
                                    Show More
                                </Button>
                            </Box>
                        </Stack>

                    </Grid>
                </Grid>

                <Grid container spacing={2} mb={4}>
                    {/* Left Side with Image */}
                    <Grid item xs={12} md={4} className='relative h-[480px]'>
                        <img src={courseImage} alt="Classroom" className='w-full h-full object-cover rounded-md shadow-md' />
                        <Box className='flex gap-2 items-center absolute bottom-8 left-20 text-white text-2xl'>
                            <img src={iqraUnilogo} alt={iqraUnilogo} />
                            <Box>
                                <Typography variant="h5" >
                                    Iqra University
                                </Typography>
                                <Typography color="textSecondary">20 courses | Peshawar</Typography>
                            </Box>

                        </Box>
                    </Grid>

                    {/* Right Side with Course List */}
                    <Grid item xs={12} md={8}>
                        <Stack>
                            {courses.map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))}

                            {/* Show More Button */}
                            <Box display="flex" justifyContent="flex-end">
                                <Button sx={{ color: '#ffffff', background: '#7ab1a2', py: '25px' }}
                                    color='inherit'
                                    className='w-full text-[12px]  hover:bg-[#628D80] hover:border-transparent ml-6'
                                >
                                    Show More
                                </Button>
                            </Box>
                        </Stack>

                    </Grid>
                </Grid>


                <Box display='grid' justifyItems='center' mt={16}>
                    <Pagination
                        count={10}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                backgroundColor: 'transparent',

                            },
                            '& .MuiPaginationItem-page': {
                                fontWeight: 'bold',  // Bold page numbers
                                color: 'white',
                            },
                            '& .Mui-selected': {
                                backgroundColor: 'transparent',  // Selected page color
                                color: 'white',
                                border:'1px solid #00FFB6'
                            },
                            '& .MuiPaginationItem-previousNext': {
                                color: 'white',  // Color for previous/next arrows
                            },
                        }}
                    />
                </Box>

            </Box>
            <Footer />
        </>
    )
}

export default Course2