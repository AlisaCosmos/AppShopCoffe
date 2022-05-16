import CardItems from '../cardItems/CardItems';
import { Grid } from '@mui/material';


import './listCard.scss';


const ListCard = (props) => {
    const { goods, setOrder} = props;

    const elements = goods.map(item => {
        return (
                <CardItems
                key={item.id}
                setOrder={setOrder}
                {...item}
                />    
        ) 
        });     

    return (
        <Grid 
            container 
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch" 
            spacing={2}>
                {
                elements
                }
        </Grid>  
    )
}
export default ListCard;