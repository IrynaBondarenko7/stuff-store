import Button from "@mui/joy/Button";
//Types
import { CartItemType } from "../App";
//Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>

    <Button variant="plain" onClick={() => handleAddToCart(item)}>
      Add to cart
    </Button>
  </Wrapper>
);

export default Item;
