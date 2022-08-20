import React, {useState} from 'react';
import {Box, Button, Grid, Modal, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {style} from '../utils/constStyles'

const DeleteButton = ({id, deletePicture}) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
      setOpen(true)
    }

    return (
        <div>
        <Button
            onClick={handleOpen}
            style={{
                color: 'lightcoral',
                border: '1px solid lightcoral'
            }}
            variant={'outlined'}
            startIcon={<DeleteIcon/>}
        >
            Delete
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
                Are you sure that you want delete this photo?
            </Typography>
            <Grid
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '10px'
                }}
            >
            <Button
                variant={'outlined'}
                style={{color: 'lightcoral', border: '1px solid lightcoral'}}
                onClick={() => deletePicture(id)}
            >
                Yes
            </Button>
            <Button
                variant={'contained'}
                style={{
                    color: 'white',
                    border: '1px solid lightcoral',
                    backgroundColor: 'lightcoral',
                    marginLeft: '30px'
                }}
                onClick={handleClose}
            >
                No
            </Button>
            </Grid>
        </Box>
    </Modal>
        </div>
    );
};

export default DeleteButton;