
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MY E-Commerce website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>
        <Container maxWidth="sm">
          <Typography variant="body1">
           this is footer for testing.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}



