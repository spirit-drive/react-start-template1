import React, { FC } from 'react';
import { FieldError } from 'react-hook-form';

interface FieldErrorProps {
  error: FieldError;
}

export const ErrorField: FC<FieldErrorProps> = ({ error }) => {
  return error && <span>{error.message}</span>;
};
