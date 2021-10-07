import React from 'react'
import Head from 'next/head'
import {AppBar, Container, Toolbar, Typography} from "@mui/material";

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Next Amazon Clone</title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Amazon Clone</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All right reserved.
                </Typography>
            </footer>
        </div>
    )
}