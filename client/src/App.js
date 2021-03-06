import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import momories from "../src/images/vmLogo.svg"
import Posts from "./components/posts/Posts";
import Forms from "./components/forms/Forms";
import useStyles from "./style"
import {useDispatch} from "react-redux";

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch()
    },[])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={momories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Forms/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;