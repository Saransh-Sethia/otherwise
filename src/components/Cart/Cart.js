import React,{useState} from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = ({ cart, setCart }) => {
    const [quantity, setQuantity] = useState(1);
    // const [price, setPrice] = useState(0);
    const navigate = useNavigate()

    const handleAdd = (product) => {
 setQuantity((prevVal)=> prevVal + 1)
    }

    const handleSubtract = (id) => {
        setQuantity((prevVal) => prevVal - 1)
    };

    // const handlePrice = () => {
    //   let ans = 0;
    //   cart.map((item) => (ans += item.amount * item.price));
    //   setPrice(ans);
    // };
  
    // useEffect(() => {
    //   handlePrice();
    // });

    const handleNavigate = () => {
        navigate('/');
    }

    const clearCart = () => {
        setCart([]);
    }
  return (
    
        cart.length !== 0 ? (
            <>
            <Box sx={{ width: "100%" }}>
            <Grid
              container
              spacing={2}
              className="grid-container"
              sx={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "50px",
                paddingBottom: "50px",
              }}
            >
              {cart.map((product) => (
                <Grid item xs={12} sm={12} md={12} lg={12} key={product.id} className="cart-container">
                  <Card sx={{ height:'100px' , width:'150px' }} >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={product.image}
                      className="image"
                    />
                  </Card>
                  <div className="details-container">
                  <Typography gutterBottom variant="h5" component="div" className="heading">
                    {product.title}
                  </Typography>
                  <div className="price-container">
                  <Typography gutterBottom variant="h5" component="div" onClick={()=>handleSubtract()}>
                    {quantity > 1 ? <RemoveIcon /> : null}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {quantity}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" onClick={()=>handleAdd()}>
                    {quantity <= 10 ? <AddIcon /> : null}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    ${product.price}
                  </Typography>
                  </div>
      
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
          <div className="cart-footer">
            <div className="back-to-shopping" onClick={()=>handleNavigate()}>Continue Shopping</div>
            <div className="back-to-shopping" onClick={()=>clearCart()}>Clear Cart</div>
          </div>
          </>
        ) : (
            <>
            <h2>No Items in the Cart !</h2>
            <div className="back-to-shopping" onClick={()=>handleNavigate()}>Continue Shopping</div>
            </>
        )
    
  );
};

export default Cart;
