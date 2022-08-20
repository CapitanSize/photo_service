import React, {useState} from 'react';
import {Box, Button, createTheme, Grid, Modal, TextField, ThemeProvider, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {style} from "../utils/constStyles";

const EditButton = ({id, img, description, editPicture}) => {
    const [open, setOpen] = useState(false)
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
                contrastText: '#fff'
            }
        }
    })
    const [des, setDes] = useState(description)
    const [picture, setPicture] = useState(null)

    return (
        <div>
            <Button
                onClick={handleOpen}
                style={{
                    color: 'lightcoral',
                    border: '1px solid lightcoral'
                }}
                variant={'outlined'}
                startIcon={<EditIcon/>}
            >
                Edit
            </Button>
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
                        Editing menu:
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
                                maxWidth: '150px',
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
                                editPicture(id, des, picture)
                                handleClose()
                            }}
                            variant={'contained'}
                            style={{
                                color: 'white',
                                border: '1px solid lightcoral',
                                backgroundColor: 'lightcoral',
                            }}
                        >
                            Confirm
                        </Button>
                        <Button
                            onClick={handleClose}
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

export default EditButton;