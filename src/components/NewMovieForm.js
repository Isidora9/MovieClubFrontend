import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

const NewMovieForm = () => {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [imageUrl, setImageUrl] = useState("https://www.amaltasindia.in/UploadPhoto/no_img.jpg");

    function addMovie() {
        fetch("http://localhost:8080/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, genre: genre, description: description, year:year, imageUrl: imageUrl
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("You successfully added a new movie.");
                clearForm();
            })
    }

    const clearForm = () => {
        setName("");
        setGenre("");
        setDescription("");
        setYear("");
        setImageUrl("https://www.amaltasindia.in/UploadPhoto/no_img.jpg");
    };


    const setProperty = (property, e) => {
        if (property === 'name') {
            setName(e);
        }
        if (property === 'genre') {
            setGenre(e);
        }
        if (property === 'imageUrl') {
            setImageUrl(e);
        }
        if (property === 'description') {
            setDescription(e);
        }
        if (property === 'year') {
            setYear(e);
        }
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <div>
                    <Card raised>
                        <CardContent>
                            <img src={imageUrl} style={{ width: '100%' }} alt="no image url"/>
                        </CardContent>
                    </Card>
                    <br/>
                    <Input placeholder="Image url" inputProps={{ 'aria-label': 'description' }}
                        onChange={(e) => setProperty("imageUrl", e.target.value)}
                    />
                </div>
                <div>
                    <h1> <Input placeholder="Title" inputProps={{ 'aria-label': 'description' }}
                        value={name}
                        onChange={(e) => setProperty("name", e.target.value)} /> </h1>
                    <h1> <Input placeholder="Genre" inputProps={{ 'aria-label': 'description' }}
                        value={genre}
                        onChange={(e) => setProperty("genre", e.target.value)} /> </h1>
                    <h1> <Input placeholder="Year" input type="number" inputProps={{ 'aria-label': 'description' }}
                        value={year}
                        onChange={(e) => setProperty("year", e.target.value)} /> </h1>

                    <br />

                    <TextField id="outlined-basic" label="Description" variant="outlined" multiline rows={10}
                        value={description}
                        onChange={(e) => setProperty("description", e.target.value)} />
                    <br />
                    <br />
                    <Button variant="outlined" onClick={ addMovie }>Done!</Button>
                </div>
            </form>
        </div>
    );
}
export default NewMovieForm;