const API_ROOT = 'http://localhost:8081';

export async function getAllLedgers() {
  const response = await fetch(`${API_ROOT}/ledger-view`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch ledger.');
  }

  const ledgers = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    ledgers.push(quoteObj);
  }

  return ledgers;
}

export async function getLedgerTransaction(ledgerId) {
  const response = await fetch(`${API_ROOT}/ledger-transaction/${ledgerId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch ledger.');
  }

  const ledgers = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    ledgers.push(quoteObj);
  }

  return ledgers;
}

export async function getTransaction(transactionId) {
  const response = await fetch(`${API_ROOT}/transaction/ETH_USD/${transactionId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch ledger.');
  }

  const transactions = [];

  for (const key in data) {
    const obj = {
      id: key,
      ...data[key],
    };

    transactions.push(obj);
  }

  return transactions;
}

export async function getTransactions() {
  const response = await fetch(`${API_ROOT}/transaction/ETH_USD`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch ledger.');
  }

  const transactions = [];

  for (const key in data) {
    const obj = {
      id: key,
      ...data[key],
    };

    transactions.push(obj);
  }

  return transactions;
}

export async function getTransactionsBoughtUnReconciled() {
  const response = await fetch(`${API_ROOT}/transaction/ETH_USD/bought/unreconciled`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch ledger.');
  }

  const transactions = [];

  for (const key in data) {
    const obj = {
      id: key,
      ...data[key],
    };

    transactions.push(obj);
  }

  return transactions;
}


export async function getTransactionsSoldUnReconciled() {
  const response = await fetch(`${API_ROOT}/transaction/ETH_USD/sold/unreconciled`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch ledger.');
  }

  const transactions = [];

  for (const key in data) {
    const obj = {
      id: key,
      ...data[key],
    };

    transactions.push(obj);
  }

  return transactions;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${API_ROOT}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData) {
  console.log (`addComment; commentData ${JSON.stringify(requestData.commentData)}`);
  console.log (`addComment; quoteId ${requestData.quoteId}`);
  const response = await fetch(`${API_ROOT}/comments/${requestData.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${API_ROOT}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
