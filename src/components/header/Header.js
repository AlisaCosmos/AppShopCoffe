
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Badge }  from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { ShoppingBasket } from '@mui/icons-material';


const Header = ({handleCard, orderLength}) => {
    return (
        
        <AppBar 
            position='fixed'>     
            <Toolbar>
                <IconButton 
                    color="inherit" >
                    <CoffeeIcon/>
                </IconButton>
                <Typography 
                    variant="h6" 
                    component="span"
                    sx={{flexGrow: 1}}> Наш суперкофе
                </Typography>
                <IconButton 
                    color="inherit"
                    //При клике по корзине вызываем заполенную через props функцию по изменению состояния на true
                    onClick={handleCard} >
                    <Badge
                        color="secondary"
                        badgeContent={orderLength}>
                        <ShoppingBasket/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
        
    )
}
export default Header;