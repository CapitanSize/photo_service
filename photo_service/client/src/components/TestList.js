import React, {useEffect, useState} from 'react';
import {PICTURES} from '../routes/consts'
import TestItem from "./TestItem";
import CreateButton from "./CreateButton";
import {Grid} from "@mui/material";

const TestList = () => {
    const [pictures, setPictures] = useState([])
    const [count, setCount] = useState(0)


    useEffect(() => {
        setPictures(PICTURES)
    }, [])

    const deletePicture = (id) => {
        const imagines = pictures.filter((item) => item.id !== id)
        setPictures(imagines)
    }
    const createPicture = (img, description) => {
        setCount(pictures.length + 1)
        const picture = {
            id: count,
            description: description,
            img: img,
            createdDate: Date.now()
        }
        setPictures([...pictures, picture])
    }
    const editPicture = (id, description, img) => {
        const imagine = pictures.find((item) => item.id == id)
        if (imagine.description !== description) {
            imagine.description = description
        }
        if (imagine.img !== img) {
            imagine.img = img
        }
        imagine.createdDate = Date.now()
        setPictures(pictures.map((item) => item.id === imagine.id ? imagine : item))
    }


    return (
        <Grid>
        <Grid style={{display: 'flex', justifyContent: 'space-between'}} container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 2, md: 3 }}>
            {pictures.map((item) =>
                <TestItem
                    key={item.id}
                    img={item.img}
                    description={item.description}
                    id={item.id}
                    createdDate={item.createdDate}
                    deletePicture={deletePicture}
                    editPicture={editPicture}
                />
            )}
        </Grid>
            <CreateButton />
        </Grid>
    );
};

export default TestList;