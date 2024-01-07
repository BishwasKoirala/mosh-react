import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick?: () => void;
}

export const Like = ({onClick} : Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {

    setStatus(!status)
    
  }

  if (status)
    return (
      <AiFillHeart
        color="#ff6b81"
        size={40}
        onClick={toggle}
      />
    );
  return (
    <AiOutlineHeart
      color="#ff6b81"
      size={40}
      onClick={toggle}
    />
  );
};

export default Like;
