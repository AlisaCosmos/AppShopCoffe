import { Alert, Snackbar } from "@mui/material";


const Snack = ({isCardOpen, handleClose = Function.prototype}) => {
    return (
        <Snackbar
            open={isCardOpen}
            onClose={handleClose}
            autoHideDuration={3000}>
            <Alert
                severity="success">
                    Ура! Кофе добавлен в корзину</Alert>
                
        </Snackbar>
    );
    
}

export default Snack;