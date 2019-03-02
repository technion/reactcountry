import React from "react";
import { Alert, Intent } from "@blueprintjs/core";

// Error boundaries don't yet work as hooks, and this must be a class.
export class ErrorBoundary extends React.Component<{}, { error: Error | undefined }> {
  constructor(props: {}) {
    super(props);
    this.state = { error: undefined };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    // If an error state is recorded, we alert on that state.
    // This is intended for non-recoverable errors, so our only option presented is to reload the page.
    if (this.state.error) {
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
            <br />
            {this.state.error.message}
          </p>
        </Alert>
      );
    }
    return this.props.children;
  }
}
