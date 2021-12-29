import React from 'react';
import Layout from './layout';

const App = () =>  {
  const header = <Layout.Header children={"some title"}/>
  const content = <Layout.Content>Content</Layout.Content>
  const footer = <Layout.Footer />
  return (
    <Layout
      header={header}
      content={content}
      footer={footer}
    />
  );
}

export default App;
