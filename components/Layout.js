import React from 'react'
import Head from 'next/head'
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import useStyles from "../utils/styles";
import NextLink from 'next/link'
import {Link} from "@material-ui/core";

export default function Layout({children}) {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Next Amazon Clone</title>
            </Head>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link><Typography className={classes.brand}>Amazon Clone</Typography></Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href='/cart' passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href='/login' passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All right reserved.
                </Typography>
            </footer>
        </div>
    )
}