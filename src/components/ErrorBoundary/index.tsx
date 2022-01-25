import React from 'react';
import {
  ErrorBoundaryPropsWithFallback,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';
import Error from 'src/containers/Error';

const ErrorBoundary: React.FC<ErrorBoundaryPropsWithFallback> = (props) => {
  return <ReactErrorBoundary {...props} fallback={<Error />} />;
};

export default ErrorBoundary;
