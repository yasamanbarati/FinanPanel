import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  ListItem,
  ListItemIcon,
  Stack,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import Image from 'next/image';

//
const ImageBoxStyle = styled(Box)({
  position: 'relative',
  background: 'linear-gradient(297deg, #1B105F 0%, #3821C5 100%)',
  height: '100svh',
  padding: '3rem 1rem',
  display: 'flex',
  flexDirection: 'column-reverse',
  color: '#fff',
  '& img': {
    width: '100%',
  },
});

//======================================================================//
export default function AuthLayout({ children }: ChildComponentProps) {
  return (
    <Grid container>
      <Grid item md={7}>
        <Hidden smDown>
          <ImageBoxStyle>
            <ListItem
              sx={{
                position: 'absolute',
                top: '3rem',
                right: '0',
                left: '0',
                px: 8,
              }}
            >
              <ListItemIcon>
                <Image
                  width={37}
                  height={48}
                  src={'/static/images/Logo.svg'}
                  alt="logo"
                />
              </ListItemIcon>
              <Stack>
                <Typography variant="h3" mb={0} fontSize={'2rem'}>
                  Wise invest
                </Typography>
                <Typography fontSize={'1.5rem'}>
                  Admin Dashboard Login
                </Typography>
              </Stack>

              <Button
                variant="outlined"
                sx={{
                  px: '1.12rem',
                  height: '2.5rem',
                  fontSize: '1rem',
                  fontWeight: '400',
                  ml: 'auto',
                  color: '#fff',
                  border: '1px solid #D0D5DD',
                }}
              >
                Visit Website
              </Button>
            </ListItem>
            <Image
              width={765}
              height={600}
              src={'/static/images/loginVector.svg'}
              alt="vector"
            />
          </ImageBoxStyle>
        </Hidden>
      </Grid>

      <Grid item md={5} sm={12} xs={12}>
        <Container
          maxWidth="sm"
          sx={{
            height: '100svh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box width={'100%'}>{children}</Box>
        </Container>
      </Grid>
    </Grid>
  );
}
