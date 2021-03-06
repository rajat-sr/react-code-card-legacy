import React from 'react';
import { render } from 'react-dom';
import CodeCard from './components/CodeCard';

const codeToDisplayInCard = `const terminal = StripeTerminal.create({
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

render(<CodeCard code={codeToDisplayInCard} language={'javascript'} />, document.getElementById('root'));
