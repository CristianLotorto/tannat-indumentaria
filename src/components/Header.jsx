import { Grid, Typography, styled } from '@mui/material';


const Container = styled(Grid)({
    position:'relative',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    minHeight:'2rem',
    width: '100%',
    backgroundColor: '#1b1b1b',
})

const GridT = styled('div')({
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '2px',
        backgroundImage: 'linear-gradient(90deg, rgba(0,185,189,1) 0%, rgba(22,26,255,1) 100%)',
    },
})

const TypoText = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00a2ff',
    paddingTop: '.5rem',
    '@media (max-width: 768px)': {
        fontSize:'.8rem'
      }
})

const Header = () => {
    return (
        <>
        <Container>
            <GridT>
                <TypoText>Ultima oportunidad! | Productos con hasta 60% OFF</TypoText>
            </GridT>
        </Container>
        </>
    )
}

export default Header;