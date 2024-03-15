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
                        console.log(data);
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
                        <img src="https://hendrickhudsonanchor.org/wp-content/uploads/2021/01/Dune2-577x900.jpg" alt="image url" />
                    </CardContent>
                </Card>
                <br />

                {(() => {
                    if (availableCopiesNum > 1) {
                    return (<>
                        <Typography variant="body2" component="p" color="textSecondary">{availableCopiesNum} available copies</Typography>
                        <Button variant="outlined" onClick={() => {rentCopy(); /*window.location.reload();*/}}>Rent</Button>
                    </>
                    )
                    } else if (availableCopiesNum == 1) {
                    return (<>
                        <Typography variant="body2" component="p" color="textSecondary">{availableCopiesNum} available copy</Typography>
                        <Button variant="outlined" onClick={() => {rentCopy(); /*window.location.reload();*/}}>Rent</Button>
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
                <Typography variant="body2" component="p" color="textSecondary">Year 2020</Typography>
    
                <br />
                <Typography variant="body2" component="p" color="textSecondary">
                The plot follows the story of Zona Zamfirova (Katarina Radivojevic), a local rich man's daughter, and the vicissitudes of her affair with Mane (Vojin Cetkovic), an ordinary goldsmith. As it was undesirable for the daughter of a rich man to marry a craftsman, the two are at first divided, with the possibility of Zona marrying the son of other rich people.
                </Typography>
            </div>
        </div>
    );
}

export default DetailedMovieView;