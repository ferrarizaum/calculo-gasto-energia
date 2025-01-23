type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  return <button>{text}</button>;
};