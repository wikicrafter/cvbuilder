import React from 'react';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <ErrorContainer>
                    <ErrorHeading>Something went wrong.</ErrorHeading>
                    <ErrorMessage>
                        {this.state.error && this.state.error.toString()}
                    </ErrorMessage>
                    <ErrorDetails>
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </ErrorDetails>
                    <ReloadButton onClick={() => window.location.reload()}>
                        Reload Page
                    </ReloadButton>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #f8d7da;
  color: #721c24;
  text-align: center;
`;

const ErrorHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ErrorDetails = styled.pre`
  background-color: #f5c6cb;
  padding: 1rem;
  border-radius: 5px;
  overflow: auto;
  max-width: 800px;
  margin-bottom: 2rem;
  text-align: left;
`;

const ReloadButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #721c24;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a71d2a;
  }
`;

export default ErrorBoundary;
