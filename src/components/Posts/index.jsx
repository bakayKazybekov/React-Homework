import s from './Posts.module.css'
import { Button, Card, CardContent, Stack, Typography, Alert } from "@mui/material"
import React from "react"

const Posts = ({ error, posts, handleAddPost }) => {

    if (error) return (
        <Stack mt={5} direction='row' justifyContent='center'>
            <Alert sx={{width: '600px', borderRadius: '10px'}} severity='error'>{error}</Alert>
        </Stack>
    )

    return (
        <>
            <Button variant='outlined' type="primary" onClick={handleAddPost}>Add</Button>
            <Stack spacing={2}>
                    {posts.map(({ title, body, id }) => {
                        return (
                            <Card key={id} sx={{ width: '345', height: '200' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{body}</Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
            </Stack>
        </>
    )
}

export default Posts