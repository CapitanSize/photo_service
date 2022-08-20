import React, {useState} from 'react';
import AddIcon from "@mui/icons-material/Add";
import {Box, Button, createTheme, Fab, Grid, Modal, TextField, ThemeProvider, Typography} from "@mui/material";
import {style} from "../utils/constStyles";
import classes from '../modules/FAB.module.css'

const CreateButton = ({createPicture}) => {

    const [des, setDes] = useState('')
    const [picture, setPicture] = useState(null)
    const [open, setOpen] = useState(false)
    const img = "https://via.placeholder.com/350x350/?text=Your+image+will+be+here";

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const theme = createTheme({
        palette: {
            lightCoral: {
                main: 'lightcoral',
                contrastText: 'white'
            }
        }
    })

    return (
        <div>
            <ThemeProvider theme={theme}>
            <Fab
                onClick={handleOpen}
                color={'lightCoral'}
                aria-label="add"
                className={classes.FAB}
                style={{position: 'fixed'}}
            >
                <AddIcon  />
            </Fab>
            </ThemeProvider>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Creating menu:
                    </Typography>
                    <Grid>
                        <Grid
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px'
                            }}
                        >
                            <img
                                style={{
                                    maxWidth: '350px',
                                }}
                                src={picture !== null ? picture : img}
                                srcSet={picture !== null ? picture : img}
                            />
                        </Grid>
                        <Grid
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                paddingBottom: '10px'
                            }}
                        >
                            <Button
                                variant="contained"
                                component="label"
                                style={{backgroundColor: 'lightcoral'}}
                            >
                                Upload
                                <input
                                    hidden accept="image/*"
                                    multiple type="file"
                                    onChange={(e) => {
                                        setPicture(URL.createObjectURL(e.target.files[0]))
                                    }}
                                />
                            </Button>
                        </Grid>
                        <Grid>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    color={'lightCoral'}
                                    value={des}
                                    style={{width: '100%', display: 'flex'}}
                                    onChange={(e) =>
                                        setDes(e.target.value)
                                    }
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                paddingTop: '20px'
                            }}
                        >
                            <Button
                                onClick={() => {
                                    createPicture(des, picture)
                                    handleClose()
                                    setPicture(null)
                                    setDes('')
                                }}
                                variant={'contained'}
                                style={{
                                    color: 'white',
                                    border: '1px solid lightcoral',
                                    backgroundColor: 'lightcoral',
                                }}
                            >
                                Create
                            </Button>
                            <Button
                                onClick={() => {
                                    handleClose()
                                    setPicture(null)
                                    setDes('')
                                }}
                                variant={'outlined'}
                                style={{color: 'lightcoral', border: '1px solid lightcoral'}}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
};

export default CreateButton;