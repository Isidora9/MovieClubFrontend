import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const DetailedMovieView = () => {

    const params = useParams();
    const [movie, setMovie] = useState(""); 
    const [availableCopiesNum, setAvailableCopiesNum] = useState(0);
    const navigate = useNavigate();

    function getMovie() {
        fetch("http://localhost:8080/movies/" + params.id, {
        })
        .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            setMovie(data);
                        })
                }
                else {
                    throw new Error("No movie with id: " + params.id + " found.")
                }
            }
        )
        .catch(error => {
            navigate('/');
            alert(error);
        })
    }

    function getNumOfAvailableCopies() {
        fetch("http://localhost:8080/movies/availableCopies/" + params.id, {
        })
        .then(
            response => {
                if (response.ok) {
                    response.json()
                    .then(data => {
                        // console.log(data);
                        setAvailableCopiesNum(data);
                    })
                }
            }
        )
    }

    function rentCopy() {
        fetch("http://localhost:8080/movies/rent/" + params.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("User has too many copies rented.")
                }
                return response.json();
            })
            .then(data => {
                getNumOfAvailableCopies();
                alert("You successfully rented a copy!")
            })
            .catch(error => {
                alert(error);
            })
    }

    useEffect(() => {
        return () => {
            getMovie();
            getNumOfAvailableCopies();
        };
      }, [])

    return (
        <div>
            <div>
                <Card raised>
                    <CardContent>
                        <img src={movie.imageUrl} style={{ width: '100%' }} alt="image url" />
                    </CardContent>
                </Card>
                <br />

                {(() => {
                    if (availableCopiesNum > 1) {
                    return (<>
                        <Typography variant="body2" component="p" color="textSecondary">{availableCopiesNum} available copies</Typography>
                        <Button variant="outlined" onClick={() =>  rentCopy() }>Rent</Button>
                    </>
                    )
                    } else if (availableCopiesNum == 1) {
                    return (<>
                        <Typography variant="body2" component="p" color="textSecondary">{availableCopiesNum} available copy</Typography>
                        <Button variant="outlined" onClick={() => rentCopy() }>Rent</Button>
                    </>
                    )} else {
                        return (<>
                            <Typography variant="body2" component="p" color="textSecondary">{availableCopiesNum} available copies</Typography>
                            <Button variant="outlined" onClick={() => rentCopy()} disabled>Rent</Button>
                        </>    
                    )}
                })()}
            </div>
            <div>
                <h1>{movie.name}</h1>
                <Typography variant="body2" component="p" color="textSecondary">{movie.genre}</Typography>
                <Typography variant="body2" component="p" color="textSecondary">{movie.year}</Typography>
    
                <br />
                <Typography variant="body2" component="p" color="textSecondary">
                    {movie.description}
                </Typography>
            </div>
        </div>
    );
}

export default DetailedMovieView;