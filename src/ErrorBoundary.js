import React, { Component } from 'react';
import * as Sentry from '@sentry/react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };

    this.render = this.render.bind(this);
  }

  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info,
    });

    this.setState({
      error: true,
    });

    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, { extra: info });
    }
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return <h1>에러 발생!</h1>;
    }
    return children;
  }
}

/* return this.props.children 한다면 <User /> 만 보여주겠다는 의미이다.
  <ErrorBoundary>
    <User />
  </ErrorBoundary>
*/
export default ErrorBoundary;
