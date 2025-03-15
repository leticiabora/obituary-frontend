import { ButtonContainer } from './Button.styles';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'link';
  children: string;
}

const Button = ({ children, variant }: ButtonProps) => {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
};

export default Button;
