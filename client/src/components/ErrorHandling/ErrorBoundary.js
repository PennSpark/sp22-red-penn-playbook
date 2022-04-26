import React from 'react';
import {onError} from "./error-data";

class ErrorBoundary extends React.Component {

    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    //this is called during the render phase, before react updates the brower's DOM
    static getDerivedStateFromError(error) {
        //calls error handler
        onError(error);

        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    //this captures errors in the commit phase, after react has updated the DOM 
    componentDidCatch(error) {
        //calls error handler
        onError(error);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;