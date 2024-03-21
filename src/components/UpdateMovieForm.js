import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';


const UpdateMovieForms = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const [inputValues, setInputValues] = useState({
        name: '',
        genre: '',
        year: '',
        description: '',
        imageUrl: ''
    });

    function getMovie() {
        fetch("http://localhost:8080/movies/" + params.id, {
        })
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(data => {
                        setMovie(data);
                        setInputValues({
                            name: data.name,
                            genre: data.genre,
                            year: data.year,
                            description: data.description,
                            imageUrl: data.imageUrl
                        });
                    }
                )
            }
            else {
                throw new Error("No movie with id: " + params.id + " found.")
            }
        })
        .catch(error => {
            alert(error);
        })
    }

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setInputValues(prevState => {
            return Object.assign({}, prevState, { name: newName });
        });
    };
    
    const handleGenreChange = (event) => {
        const newGenre = event.target.value;
        setInputValues(prevState => {
            return Object.assign({}, prevState, { genre: newGenre });
        });
    };
    
    const handleYearChange = (event) => {
        const newYear = parseInt(event.target.value);
        setInputValues(prevState => {
            return Object.assign({}, prevState, { year: newYear });
        });
    };
    
    const handleDescriptionChange = (event) => {
        const newDescription = event.target.value;
        setInputValues(prevState => {
            return Object.assign({}, prevState, { description: newDescription });
        });
    };

    const handleImageUrlChange = (event) => {
        console.log('New url:', event.target.value);
        const newImageUrl = event.target.value;
        setInputValues(prevState => {
            return Object.assign({}, prevState, { imageUrl: newImageUrl });
        });
    };

    const handleUpdateData = () => {

        const updatedMovie = {
            ...movie,
            name: inputValues.name,
            genre: inputValues.genre,
            year: inputValues.year,
            description: inputValues.description,
            imageUrl: inputValues.imageUrl
        };

        fetch('http://localhost:8080/movies/' + params.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMovie)
        })
        .then(response => 
            response.json())             
        .then(updatedData => {
            console.log('Updated data:', updatedData);
            setMovie(updatedData);
            alert("You have successfully updated \"" + updatedData.name + "\" movie!");
        })
        .catch(error => {
        console.error('Error updating a movie:', error);
        });
    };

    useEffect(() => {
        return () => getMovie();
    }, [])


    return (
        <div className="formContainer">
            <h4>Update a movie:</h4>
            <form noValidate autoComplete="off">
                <div>
                    <Card raised>
                        <CardContent>
                            <img src={inputValues.imageUrl} style={{ width: '100%' }} alt="no image url"/>
                        </CardContent>
                    </Card>
                    <br/>
                    <label>Image URL:</label><br/>
                    <Input value={inputValues.imageUrl} sx={{ minWidth: '60%', mb:3 }}
                        onChange={handleImageUrlChange} />
                </div>
                <div>

                    <label>Title:</label><br/>
                    <Input value={inputValues.name} sx={{ minWidth: '60%', mb:3 }}
                        onChange={handleNameChange} />
                        <br/>

                    <label>Genre:</label><br/>
                    <Input value={inputValues.genre} sx={{ minWidth: '60%', mb:3 }}
                        onChange={handleGenreChange} />
                        <br/>

                    <label>Year:</label><br/>
                    <Input type="number" value={inputValues.year} sx={{ minWidth: '60%', mb:3 }}
                        onChange={handleYearChange} />
                        <br />

                    <TextField id="outlined-basic" label="Description" variant="outlined" multiline rows={12}
                        value={inputValues.description}
                        onChange={handleDescriptionChange} />
                    <br />
                    <Button className="button1" sx={{ mt:2 }} onClick={handleUpdateData} variant="outlined">Update</Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMovieForms;
