import { styled } from '../../../lib/stitches.config';

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled('button', {
  border: 0,
  position: 'relative',
  width: '130px',
  height: '48px',
  background: '$white',
  boxShadow: '1px 4px 6px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  variants: {},
});
