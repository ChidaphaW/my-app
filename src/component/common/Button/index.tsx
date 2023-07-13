import { ButtonStyled } from "./style";
import { ButtonProp } from "./type";

const Button = (prop:ButtonProp) => {
    const { children, ...restProp} = prop;
    return <ButtonStyled {...restProp}>{children}</ButtonStyled>
}

export default Button;