import { ImageContainer  } from "./style";

const Image = ( {src, alt} ) => 
{
  return (
    <ImageContainer src={src} alt={alt}></ImageContainer>
  );
}

export default Image;
