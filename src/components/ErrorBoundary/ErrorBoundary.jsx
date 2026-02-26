import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null }
    }
    static getDerivedStateFromError(error) {
        // Update state so next render shows fallback UI 
        return { hasError: true, error }
    }
    componentDidCatch(error, errorInfo) {
        console.error("Error caught", error, errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong 😒</h1>
                    <p>{this.state.error?.message}</p>
                </div>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;