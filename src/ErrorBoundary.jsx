import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        error: null,
    };

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.error) {
            if (this.props.renderError) {
                return this.props.renderError(this.state.error);
            }
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
