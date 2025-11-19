import {Avatar, Box, Typography, Paper, Link, Button } from "@mui/material";
import Divider from '@mui/material/Divider';

export default function Home() {
  return (
    <Box style={{ width: "100%", height: '100vh', justifyContent: "center", alignItems: "center", display: "flex", backgroundColor: "#fff", padding: 16 }}>
      <Paper style={{
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
              sx={{ width: 120, height: 120 }}
          />

          <Box>
              <Typography variant="h1" component="h1" style={{ fontSize: 24, fontWeight: 'bold', color: '#1c1f33', textAlign: 'center', fontFamily: 'Montserrat' }}>
                  Federico Tassara
              </Typography>

              <Typography variant="h2" component="h2" style={{ fontSize: 14, fontWeight: 'normal', color: '#1c1f33', textAlign: 'center', marginTop: 8, fontFamily: 'Montserrat' }}>
                  Freelance
              </Typography>
              <Typography variant="h2" component="h2" style={{ fontSize: 14, fontWeight: 'normal', color: '#1c1f33', textAlign: 'center', marginTop: 4, fontFamily: 'Montserrat' }}>
                  Founder & Fractional CTO at <Link style={{ color: '#1c1f33', fontWeight: 'bold' }} href="https://oraloco.com">Oraloco</Link>
              </Typography>
              <Typography variant="h2" component="h2" style={{ fontSize: 14, fontWeight: 'normal', color: '#1c1f33', textAlign: 'center', marginTop: 4, fontFamily: 'Montserrat', marginBottom: 8 }}>
                  Full Stack Developer | Mobile App Developer | Tech Consultant
              </Typography>
          </Box>

          <Box style={{ height: 2, background: '#1c1f33', width: 50 }}></Box>

          <Box>
              <Typography variant="body1" component="p" style={{ fontSize: 14, fontWeight: 'normal', color: '#1c1f33', textAlign: 'center', marginTop: 8, fontFamily: 'Montserrat' }}>
                  I help people and businesses to build and scale their software products. I specialize in web and mobile applications, delivering high-quality solutions tailored to your needs.
              </Typography>
              <Typography variant="body1" component="p" style={{ fontSize: 14, fontWeight: 'normal', color: '#1c1f33', textAlign: 'center', marginTop: 16, fontFamily: 'Montserrat' }}>
                  Let&#39;s work together to turn your ideas into reality!
              </Typography>
          </Box>

          <Box>
              <Button variant={'contained'} style={{ background: '#1c1f33' }} href="https://calendly.com/federicotassara/" target="_blank" rel="noopener noreferrer">
                  Prenota una consulenza
              </Button>
          </Box>

      </Paper>
    </Box>
  );
}
