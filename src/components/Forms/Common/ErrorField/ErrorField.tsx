import React, { FC } from 'react';
import { FieldError } from 'react-hook-form';
import './ErrorField.sass';
import cn from 'clsx';

interface FieldErrorProps {
  error: FieldError;
}

export const ErrorField: FC<FieldErrorProps> = ({ error }) => {
  return error && <p className={cn('error')}>{error.message}</p>;
};
