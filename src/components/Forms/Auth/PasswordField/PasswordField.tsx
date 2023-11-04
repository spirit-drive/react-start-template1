import React, { FC, memo } from 'react';
import cn from 'clsx';
import './PasswordField.sass';
import { AuthInputs } from '../types';
import { ErrorField } from '../../Common/ErrorField/ErrorField';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface PasswordFieldProps {
  register: UseFormRegister<AuthInputs>;
  errors: FieldErrors<AuthInputs>;
}

export const PasswordField: FC<PasswordFieldProps> = memo((props: PasswordFieldProps) => {
  return (
    <div className={cn('password-container')}>
      <label>Password:</label>
      <input type={'password'} {...props.register('password', { required: true })} />
      <ErrorField error={props.errors.password} />
    </div>
  );
});
