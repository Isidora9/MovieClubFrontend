import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const DetailedMovieView = () => {

    const params = useParams();
    const [movie, setMovie] = useState(""); 

    function getMovie() {
        fetch("http://localhost:8080/movies/" + params.id, {
        })
            .then(
            response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            setMovie(data);
                        })
                }
            })
    }

    function rentCopy() {
        fetch("http://localhost:8080/movies/rent/" + params.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(data => {
                alert("You successfully rented a copy!")
            })
    }


    useEffect(() => {
        return () => getMovie();
      }, [])

    return (
        <div>
            <div>
                <Card raised>
                    <CardContent>
                        <img src="https://hendrickhudsonanchor.org/wp-content/uploads/2021/01/Dune2-577x900.jpg" alt="image url" />
                    </CardContent>
                </Card>
                <br /><Typography variant="body2" component="p" color="textSecondary">13 available copies</Typography>
                <Button variant="outlined" onClick={() => rentCopy()}>Rent</Button>
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