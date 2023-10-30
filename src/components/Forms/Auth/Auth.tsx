import React, { FC, memo } from 'react';
import { EmailField } from './EmailField/EmailField';
import './Auth.sass';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthInputs, AuthType } from './types';
import { PasswordField } from './PasswordField/PasswordField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface AuthProps {
  type: AuthType;
}

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(7),
  })
  .required();

export const Auth: FC = memo<AuthProps>(({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<AuthInputs> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <EmailField register={register} errors={errors} />
        </div>
        <div>
          <PasswordField register={register} errors={errors} />
        </div>
        <div>
          <button type={'submit'}>{type == AuthType.signIn ? 'Sign In' : 'Sign Up'}</button>
        </div>
      </form>
    </div>
  );
});
