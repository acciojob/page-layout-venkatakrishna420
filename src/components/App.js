
import React from "react";
import './../styles/App.css';

function PageLayout({ header, footer, children }) {
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

export default function App() {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<p>© 2023 My Website. All rights reserved.</p>}
    >
      <p>This is the content of my website.</p>
    </PageLayout>
  );
}
