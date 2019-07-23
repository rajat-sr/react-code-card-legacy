import React from 'react';
import Prism from 'prismjs';
import './prism.css';

const code = `const terminal = StripeTerminal.create({
  onFetchConnectionToken: server.fetchConnectionToken,
});

const result = await terminal.discoverReaders();
const reader = result.discoveredReaders[0];
await terminal.connectReader(reader);

const item = {
  description: 'High Growth Handbook',
  amount: 2000,
  quantity: 1,
};
const cart = {
  lineItems: [item],
  currency: 'usd',
};

terminal.setReaderDisplay({ type: 'cart', cart });`;

class App extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="space">
        <div className="card">
          <div class="card-shine" />
          <div class="code-snippet">
            <pre>
              <code className="prism language-javascript">{code}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
