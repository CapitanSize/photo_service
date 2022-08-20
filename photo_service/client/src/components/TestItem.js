import React from 'react';
import {IMG_ROUTE} from "../routes/consts";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import classes from '../modules/Card.module.css'
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
const TestItem = ({img, id, description, createdDate, editPicture, deletePicture}) => {

    const navigate = useNavigate()

    return (
            <Grid item xs={2} sm={5} md={3}>
            <Card className={classes.Card} style={{width: '400px'}}>
                <CardMedia
                    component="img"
                    height={'150px'}
                    image={img}
                    onClick={() => navigate(IMG_ROUTE + '/' + id)}
                    style={{cursor: 'pointer'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {description}
                        <p style={{fontSize: '15px'}}>{createdDate}</p>
                    </Typography>
                    <div style={{justifyContent: 'space-between', display: 'flex'}}>
                        <EditButton
                            id={id}
                            editPicture={editPicture}
                            img={img}
                            description={description}
                        />
                        <DeleteButton
                            id={id}
                            deletePicture={deletePicture}
                        />
                    </div>
                </CardContent>
            </Card>
            </Grid>
    );
};

export default TestItem;