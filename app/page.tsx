import {Avatar, Box, Typography, Paper, Link, Button} from "@mui/material";
import Divider from '@mui/material/Divider';

export default function Home() {
    return (
        <Box style={{
            width: "100%",
            height: '100vh',
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            backgroundColor: "#fff",
            padding: 16
        }}>
            <Paper style={{
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                width: 500,
                minHeight: 500,
                justifyContent: "flex-start",
                alignItems: 'center',
                display: "flex",
                flexDirection: "column",
                gap: 20,
                background: "#fff",
                padding: 24
            }}>

                <Avatar
                    alt="Federico Tassara"
                    src={"/images/profile.jpeg"}
                    sx={{width: 120, height: 120}}
                />

                <Box>
                    <Typography variant="h1" component="h1" style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#1c1f33',
                        textAlign: 'center',
                        fontFamily: 'Montserrat'
                    }}>
                        Federico Tassara
                    </Typography>

                    <Typography variant="h2" component="h2" style={{
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#1c1f33',
                        textAlign: 'center',
                        marginTop: 8,
                        fontFamily: 'Montserrat'
                    }}>
                        Libero Professionista
                    </Typography>
                    <Typography variant="h2" component="h2" style={{
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#1c1f33',
                        textAlign: 'center',
                        marginTop: 4,
                        fontFamily: 'Montserrat'
                    }}>
                        Founder & Fractional CTO at <Link style={{color: '#1c1f33', fontWeight: 'bold'}}
                                                          href="https://oraloco.com">Oraloco</Link>
                    </Typography>
                    <Typography variant="h2" component="h2" style={{
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#1c1f33',
                        textAlign: 'center',
                        marginTop: 4,
                        fontFamily: 'Montserrat',
                        marginBottom: 8
                    }}>
                        Full Stack Developer | Mobile App Developer | Tech Consultant
                    </Typography>
                </Box>

                <Box style={{height: 2, background: '#1c1f33', width: 50}}></Box>

                <Box>
                    <Typography variant="body1" component="p" style={{
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#1c1f33',
                        textAlign: 'center',
                        marginTop: 8,
                        fontFamily: 'Montserrat'
                    }}>
                        Aiuto persone e aziende a creare e scalare i loro prodotti software. Sono specializzato in
                        applicazioni web e mobile, offrendo soluzioni di alta qualità su misura per le tue esigenze.
                    </Typography>
                    <Typography variant="body1" component="p" style={{
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#1c1f33',
                        textAlign: 'center',
                        marginTop: 16,
                        fontFamily: 'Montserrat'
                    }}>
                        Lavoriamo insieme per trasformare le tue idee in realtà!
                    </Typography>
                </Box>

                <Box>
                    <Button variant={'contained'} style={{background: '#1c1f33'}}
                            href="https://calendly.com/federicotassara/" target="_blank" rel="noopener noreferrer">
                        Prenota una consulenza
                    </Button>
                </Box>

            </Paper>
        </Box>
    );
}
