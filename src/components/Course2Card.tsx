// Course card for course2 page
import React from 'react';
import { Button, IconButton, Typography, Box, Card, CardContent } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

interface CourseCardProps {
    title: string;
    site: string;
    degree: string;
    duration: string;
    credits: string;
    dateRange: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, site, degree, duration, credits, dateRange }) => {
    return (
        <Card sx={{ color: 'white', display: 'flex', justifyContent: 'space-between', mb: 1,px:2, bgcolor: '#7ab1a2', }}
        >
            <CardContent sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }} >
                <Typography variant="h6">{title}</Typography>
                <Box display='flex' fontSize={1} gap={1}>
                    <PlaceOutlinedIcon />
                    <Typography sx={{ fontSize: '12px' }}>{site}</Typography>
                </Box>

                <Box display="flex" flexWrap='wrap' alignItems="center" gap={3} color="textSecondary" mt={1}>
                    <Typography sx={{ fontSize: '12px' }}><WorkspacePremiumOutlinedIcon />{degree}</Typography>

                    <Typography variant="body2" ml={1} sx={{ fontSize: '12px' }}>
                        <AccessTimeIcon fontSize="small" />
                        {duration}
                    </Typography>

                    <Typography variant="body2"  sx={{ fontSize: '12px' }}>
                        <EventNoteOutlinedIcon />
                        Full Time {credits} credits
                    </Typography>

                    <Typography variant="body2"  sx={{ fontSize: '12px' }}>
                        <CalendarTodayIcon fontSize="small" />
                        {dateRange}
                    </Typography>
                </Box>

            </CardContent>

            <Box display="flex" alignItems="center">
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Apply
                </Button>
                <IconButton >
                    <FavoriteBorderIcon sx={{ color: '#ffffff' }} />
                </IconButton>
            </Box>
        </Card>
    );
};

export default CourseCard;
