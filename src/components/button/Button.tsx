import React, { FC } from 'react';
import './button.css';

interface IProps {
  primary?: boolean,
  backgroundColor?: string | null,
  size?: string,
  label: string,
  onClick?: () => void,
}
/**
 * Primary UI component for user interaction
 */
export const Button: FC<IProps> = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor: backgroundColor || 'green' }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
