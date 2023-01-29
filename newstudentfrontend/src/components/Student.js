import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function Student() {
    const paperstyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [name, setName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [students, setStudents] = useState([])


    const handleClick = (e) => {
        e.preventDefault()
        const student = { name, address }
        console.log(student)

        fetch("http://localhost:8080/student/add",{
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(student)
    }).then(() => {
        console.log("New Student added") 
    })
}

    React.useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            })
    })


    return (
        <Container>
            <Paper elevation={3} style={paperstyle}>
                <h1 style={{ color: "blue" }}><u>Add New Contact</u></h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Number" variant="outlined" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleClick}>Submit</Button>
                </Box>

            </Paper>

            <h1>Contacts</h1>

            <Paper elevation={3} style={paperstyle}>

                {students.map(student => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
                        id:{student.id}<br />
                        Name:{student.name}<br />
                        Number:{student.address}<br />

                    </Paper>
                ))}
            </Paper>
        </Container>
    );
}
