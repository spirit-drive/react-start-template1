import React, { FC } from 'react';
import cn from 'clsx';
import { AuthInputs } from '../types';
import { ErrorField } from '../ErrorField/ErrorField';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface PasswordFieldProps {
  register: UseFormRegister<AuthInputs>;
  errors: FieldErrors<AuthInputs>;
}

export const PasswordField: FC<PasswordFieldProps> = ({ register, errors }) => {
  return (
    <>
      <label>Password:</label>
      <input type={'password'} {...register('password', { required: true })} />
      <ErrorField error={errors.password} />
    </>
  );
};
