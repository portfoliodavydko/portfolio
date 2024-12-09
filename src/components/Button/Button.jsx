import { HelloButton } from './Button.style';

const Button = ({ text, chindren, position, handleOpen }) => {
  return (
    <HelloButton position={position} onClick={handleOpen}>
      {text}
      {chindren}
    </HelloButton>
  );
};

export default Button;
