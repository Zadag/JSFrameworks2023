import { Component } from "react";

type IProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

class ErrorBoundary extends Component<IProps> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      error,
    };
  }
  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
