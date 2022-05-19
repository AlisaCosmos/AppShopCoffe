import BacketItems from "../backetItems/backetItems";

import { ShoppingBasket } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";


const Backed = (props) => {
    const {
        //Состояние открыта или закрыта корзина
        cardOpen, //false
        cardClose = Function.prototype, 
        //Заказ
        order = [], 
        //Удаление заказа 
        removeFromOrder
    } = props;

    return(
        <Drawer
            anchor="right"
            // Получаем состояние в зависимости открыта корзина на странице или нет
            open={cardOpen}
            // Функция отрабатывает по закрытию корзины при клике вне области Drawer
            onClose ={cardClose}>

                <List sx={{width: 300}}>
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingBasket/>
                        </ListItemIcon>
                        <ListItemText primary="Корзина" />
                    </ListItem>

                    <Divider/>

                    {
                        !order.length ? 
                        (
                        //Если корзина пуста 
                        <ListItem> Корзина пуста</ListItem>
                         //Если не пуста выведем список товаров
                        )  : (
                                <> {
                                        order.map((item) => {
                                            return(<BacketItems 
                                                key={item.name} 
                                                removeFromOrder={removeFromOrder}
                                                //все полученные props
                                                {...item}/>
                                                );
                                            
                                        })
                                    }
                                </>
                            )
                    }     
                </List>
        </Drawer>
    )

}
export default Backed;