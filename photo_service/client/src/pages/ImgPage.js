import React from 'react';
import {useParams} from "react-router-dom";
import {PICTURES} from "../routes/consts";
import TestPage from "../components/TestPage";
import classes from '../modules/Img.module.css'

const ImgPage = () => {

    const {id} = useParams()
    const imagine = PICTURES.find((item) =>
        item.id == id
    )
    return (
        <div className={classes.Img}>
            <TestPage
                id={imagine.id}
                createdDate={imagine.createdDate}
                img={imagine.img}
                description={imagine.description}
            />
        </div>
    );
};

export default ImgPage;