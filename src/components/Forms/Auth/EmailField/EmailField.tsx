import React, { FC } from 'react';
import cn from 'clsx';
import { AuthInputs } from '../types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ErrorField } from '../ErrorField/ErrorField';

interface EmailProps {
  register: UseFormRegister<AuthInputs>;
  errors: FieldErrors<AuthInputs>;
}

export const EmailField: FC<EmailProps> = ({ register, errors }) => {
  return (
    <>
      <label>Email:</label>
      <input type={'text'} {...register('email', { required: true })} />
      <ErrorField error={errors.email} />
    </>
  );
};
