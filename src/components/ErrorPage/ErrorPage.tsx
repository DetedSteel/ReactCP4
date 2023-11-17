import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styles from './errorpage.module.css';

export const ErrorPage: FC = () => {
  const error = useRouteError();
  let errorMessage: string;
  let errorStatus: number;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
    errorStatus = error.status;
  } else {
    errorMessage = 'Ошибка не 4xx';
    errorStatus = 600;
  }

  return (
    <div className={styles.container}>
      <h1>Oooooops!</h1>
      <p>{errorMessage}</p>
      <p>{errorStatus < 600 ? errorStatus : ''}</p>
    </div>
  );
};
