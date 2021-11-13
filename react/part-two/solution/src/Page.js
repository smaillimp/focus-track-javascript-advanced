import { Component } from 'react';

class Page extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <main>
        <h2>{title}</h2>
        {children}
      </main>
    );
  }
}
export default Page;
