import React from 'react'
import Head from 'next/head'
import useStyles from "../utils/styles";
import NextLink from 'next/link'
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    createMuiTheme,
    Link,
    ThemeProvider,
    CssBaseline
} from "@material-ui/core";

export default function Layout({description, title, children}) {
    const theme = createMuiTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
        },
        palette: {
            type: 'light',
            primary: {
                main: '#f0c000'
            },
            secondary: {
                main: '#208080'
            }
        }
    })
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title> {title ? `${title} -  Amazon Clone` : ' Amazon Clone'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
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
            </ThemeProvider>

        </div>
    )
}