import React, { ErrorInfo } from "react";
import { Alert, Intent } from "@blueprintjs/core";

// Error boundaries don't yet work as hooks, and this must be a class.
export class ErrorBoundary extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Alert
          confirmButtonText="Reload this page"
          icon="error"
          intent={Intent.DANGER}
          isOpen={true}
          onConfirm={() => {
            location.reload();
          }}
        >
          <p>
            A fatal error has occured. The error was:
            {this.state.error.message}
          </p>
        </Alert>
      );
    }
    return this.props.children;
  }
}
