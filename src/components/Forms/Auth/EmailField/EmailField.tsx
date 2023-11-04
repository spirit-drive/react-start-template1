import React, { FC, memo } from 'react';
import cn from 'clsx';
import './EmailField.sass';
import { AuthInputs } from '../types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ErrorField } from '../../Common/ErrorField/ErrorField';

interface EmailProps {
  register: UseFormRegister<AuthInputs>;
  errors: FieldErrors<AuthInputs>;
}

export const EmailField: FC<EmailProps> = memo((props: EmailProps) => {
  return (
    <div className={cn('email-container')}>
      <label>Email:</label>
      <input type={'text'} {...props.register('email', { required: true })} />
      <ErrorField error={props.errors.email} />
    </div>
  );
});
