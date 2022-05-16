import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BacketItems = (props) => {
    console.log(`props ${props}`);
    
    const {
        removeFromOrder, 
        id, 
        key, 
        name,
        blend_name, 
        quantity
    } = props;

    return (
        <ListItem>
            <Typography 
                variant="body1"> 
                    id {id}, название товара {name} и количество - {quantity}
            </Typography>
            
            <IconButton
                onClick={()=> removeFromOrder(id)}>
                <Close/>
            </IconButton>
        </ListItem>
    )
}
export default BacketItems;