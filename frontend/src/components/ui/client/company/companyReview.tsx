"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

type CompanyReviewProps = {
    title?: string;
    content?: string;
    role?: string;
    date?: string;
    rating?: number;
    helpfulCount?: number;
};

export default function CompanyReview({
    title = 'Great place to work!',
    content = 'Amazing company culture and great benefits. The team is very supportive and the work is challenging and rewarding.',
    role = 'Software Engineer',
    date = 'Dec 10, 2024',
    rating = 5,
    helpfulCount = 12,
}: CompanyReviewProps): React.ReactElement {
    return (
        <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 2.5 }}>
            <Stack spacing={1.5}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Rating name="read-only" value={rating} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">{date}</Typography>
                </Stack>

                <Typography variant="subtitle1" fontWeight={700} color="text.primary">
                    {title}
                </Typography>

                <Typography variant="body1" color="text.primary">
                    {content}
                </Typography>

                <Typography variant="body2" color="text.secondary">{role}</Typography>

                <Box display="flex" justifyContent="flex-end">
                    <Typography variant="body2" color="text.secondary">{helpfulCount} people found this helpful</Typography>
                </Box>
            </Stack>
        </Paper>
    );
}


