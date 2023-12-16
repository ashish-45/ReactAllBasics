import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RadioIcon from '@material-ui/icons/Radio';
import firebase from '../Firebase';
import SearchBar from "material-ui-search-bar";
import { useHistory } from 'react-router-dom';
import { Container, Input, TextField } from '@material-ui/core';
import './Music.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    search: {
        marginTop: 30,
    },
    table: {
        minWidth: 650,
        marginBottom: 10,
    },
    cells: {
        marginTop: 50,
    },
    thumb: {
        color: '#e75480',
    },
    name: {
        color: 'blue',
        padding: 10,
        fontSize: 20,
    },
    audios: {
        display: 'flex',
        margin: 'auto',
        height: 50,
        width: 500,
        alignItems: 'center'
    },
    icon: {
        fontSize: 40,
        color: '#e75480',
        cursor: 'pointer'
    },
    addicon: {
        fontSize: 80,
        color: '#e75480',
        cursor: 'pointer',
        float: 'right',
    }

}));

const Music = () => {

    const history = useHistory();
    const inputRef = useRef(null);
    const [search, setSearch] = useState("");
    const [like, setLike] = useState(0);

    const [music, setMusics] = useState([
        {
            id: "1",
            name: "Arijit singh",
            audiosrc: "https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle-bell.wav",
            likeNumbers: 0,
        },
        {
            id: "2",
            name: "Atif Aslam",
            audiosrc: "https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle-bell.wav",
            likeNumbers: 0,
        },
        {
            id: "3",
            name: "Sonu Nigam",
            audiosrc: "https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle-bell.wav",
            likeNumbers: 0,
        },
        {
            id: "4",
            name: "Neha kakkar",
            audiosrc: "https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle-bell.wav",
            likeNumbers: 0,
        },
        {
            id: "5",
            name: "Shrey Goshal",
            audiosrc: "https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle-bell.wav",
            likeNumbers: 0,
        },
    ])

    const likeButton = (id) => {
        const likebuttons = music.find((curElem) => {
            return curElem.id === id
        })
        setLike(like + 1);
        console.log(likebuttons + 1);
    }
    console.log(search);


    const addSinger = () => {

    }


    // Logout Functionality
    const Logout = () => {
        firebase.auth().signOut().then(() => {
            alert("Logout Successfull...");
            history.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ width: '100%' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <RadioIcon style={{ fontSize: "30px" }} />&nbsp; React Music
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Button color="inherit" onClick={Logout}> <ExitToAppIcon /> Logout </Button>
                </Toolbar>
            </AppBar>
            <Container>
                <SearchBar className={classes.search}
                    value={search}
                    onChange={(newValue) => setSearch(newValue)}
                />
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {music.filter(singer => singer.name.toLowerCase().startsWith(search)).map(mus => {
                            return (
                                <TableRow>
                                    <TableCell style={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <div>
                                            <h3>{like[music.id]} <ThumbUpAltIcon className={classes.icon} onClick={() => likeButton(music.id)} /> {mus.name}</h3>
                                        </div>
                                        <div>
                                            <audio ref={inputRef} src={mus.audiosrc} className={classes.audios} controls />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                        <AddCircleIcon className={classes.addicon} />
                    </TableBody>
                </Table>
            </Container>
        </div>
    );
}

export default Music;
