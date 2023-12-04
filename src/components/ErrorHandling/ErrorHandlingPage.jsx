import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack);
    console.log("ComponentDidCatchError", error);
    console.log("ComponentDidCatchInfo", info);
  }

  render() {
    if (this.state.hasError) {
      console.log("ERRORRR", this.state.hasError);
      // You can render any custom fallback UI
      return this.props.fallback;
    }
    console.log("ERRORRR", this.state.hasError);
    return this.props.children;
  }
}
export default ErrorBoundary;
