import React from 'react';
import classes from "../modules/Page.module.css";
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";


const TestPage = ({img, id, description, createdDate, editPicture, deletePicture}) => {
    console.log(img, id, description)
    return (
            <Card className={classes.Page} >
                <CardMedia
                component="img"
                height={'600px'}
                image={img}
                />
                <CardContent>
                    <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
                    {description}
                        <p style={{fontSize: '15px'}}>{createdDate}</p>
                    </Typography>
                    <div style={{justifyContent: 'space-between', display: 'flex'}}>
                    <EditButton img={img} description={description} editPicture={editPicture} id={id}/>
                    <DeleteButton id={id} deletePicture={deletePicture}/>
                    </div>
                </CardContent>
            </Card>
    );
};

export default TestPage;