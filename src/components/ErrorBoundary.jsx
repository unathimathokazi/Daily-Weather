import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, errorMessage: "" };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100/80 text-red-700 rounded-xl border border-red-200 shadow-md text-center">
          <p className="font-medium">
            Something went wrong: {this.state.errorMessage}
          </p>
          <p className="text-sm mt-2">Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}