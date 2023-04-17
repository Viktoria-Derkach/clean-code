main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];

  processTransactions(transactions);
}

const processType = {
  PAYMENT: {
    type: 'PAYMENT',
    text: 'payment'
  },
  REFUND: {
    type: 'REFUND',
    text: 'refund'
  }
}

function processTransaction(transaction, type) {
  if (transaction.status !== 'OPEN') {
    console.log('Invalid transaction type!', transaction);
    return;
  }
  if (transaction.method === 'CREDIT_CARD') {
    processCreditCard(transaction, processType[type]);
  } else if (transaction.method === 'PAYPAL') {
    processPayPal(transaction, processType[type]);
  } else if (transaction.method === 'PLAN') {
    processPlan(transaction, processType[type]);
  }
}

function processTransactions(transactions) {
  if (!transactions || transactions.length === 0) {
    console.log('No transactions provided!');
    return;
  }
  for (const transaction of transactions) {
    if (transaction.type !== 'PAYMENT' &&  transaction.type !== 'REFUND') {
      console.log('Invalid transaction type!', transaction);
      continue;
    }
    if (transaction.type === 'PAYMENT') {
      processTransaction(transaction, 'PAYMENT')
    } else {
      processTransaction(transaction, 'REFUND')
    }
  }
}

function processCreditCard(transaction, process) {
  console.log(
   `Processing credit card ${process.text} for amount: ` + transaction.amount
  );
}

function processPayPal(transaction, process) {
  console.log(`Processing PayPal ${process.text} for amount: ` + transaction.amount);
}

function processPlan(transaction, process) {
  console.log(`Processing plan  ${process.text} for amount: ` + transaction.amount);
}
