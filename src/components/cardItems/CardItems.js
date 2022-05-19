import { Card, CardMedia,CardContent,Typography, CardActions,Button, Grid } from "@mui/material";


const CardItems = ({id, name, blend_name, origin, notes, setOrder }) => {
    
    return (
        <Grid 
            item xs={12} md={4}>
                <Card sx={{ 
                        maxWidth: 345,
                        height:'100%', 
                        padding:0}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://vjoy.cc/wp-content/uploads/2019/08/2-31.jpg"
                        alt={blend_name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3"> {blend_name}
                        </Typography>
                        <Typography variant="body2" component="div" color="text.secondary"> Происхождение: {origin}
                        </Typography>
                        <Typography variant="body2" component="div" color="text.secondary"> Теги: {notes}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                            variant="outlined" 
                            size="small"
                            onClick={() =>
                                setOrder({
                                    id: id,
                                    name: blend_name
                                })
                            } > Купить</Button>
                    </CardActions>
                </Card>    
        </Grid>  
    )
}

export default CardItems;