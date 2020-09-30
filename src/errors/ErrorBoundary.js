import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <h2>{this.props.message}</h2>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;