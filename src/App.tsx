import React from 'react';
import Layout, { Content, Footer, Header } from './layout';

const App = () =>  {
  const header = <Header children={"some title"}/>
  const content = <Content >Content</Content>
  const footer = <Footer />
  return (
    <Layout
      header={header}
      content={content}
      footer={footer}
    />
  );
}

export default App;
