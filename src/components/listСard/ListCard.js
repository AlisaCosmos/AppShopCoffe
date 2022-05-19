import CardItems from '../cardItems/CardItems';
import Spinner from '../spinner/Spinner';

import { Grid } from '@mui/material';
import { Update } from '@mui/icons-material';


const ListCard = (props) => {
    const { goods, setOrder, isLoading, setLoading} = props;
    
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
                isLoading ? <Spinner/> : elements
                }
        </Grid>  
    )
}
export default ListCard;