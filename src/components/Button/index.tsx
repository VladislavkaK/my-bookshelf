import styled from '@emotion/styled';
import { ReactNode } from 'react';
import * as colors from 'styles';

interface Props {
  type?: "submit" | "reset" | "button" | undefined;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: ReactNode;
}

const buttonVariants = {
  primary: {
    background: colors.indigo,
    color: colors.base,
  },
  secondary: {
    background: colors.gray,
    color: colors.text,
  },
};

const ButtonStyled = styled.button<{ variant: "primary" | "secondary" }>({
  padding: '10px 15px',
  border: '0',
  lineHeight: '1',
  borderRadius: '3px'
}, ({ variant = 'primary' }) => buttonVariants[variant],);

const Button = (props: Props) => {
  const { type, variant = 'primary', children, onClick } = props;

  return (
    <ButtonStyled
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
