import React from 'react';
import {
  ErrorBoundaryPropsWithFallback,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';

import Fallback from '../Fallback';

const ErrorBoundary: React.FC<ErrorBoundaryPropsWithFallback> = (props) => {
  return <ReactErrorBoundary {...props} fallback={<Fallback />} />;
};

export default ErrorBoundary;
