import { ButtonEqual  } from "./style";

const ButtonBig = ( {label, onClick} ) => 
{
  return (
    <ButtonBig onClick={onClick} type="button">{label}</ButtonBig>
  );
}

export default ButtonBig;
