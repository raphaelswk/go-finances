import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {

    const transactions = await this.find();

    const incomeBalance = transactions.reduce((prev, cur) => {
      return cur.type === 'income' ? prev + Number(cur.value) : prev;
    }, 0);

    const outcomeBalance = transactions.reduce((prev, cur) => {
      return cur.type === 'outcome' ? prev + Number(cur.value): prev;
    }, 0 as number);

    const totalBalance = incomeBalance - outcomeBalance;

    const balance = {
      income: incomeBalance,
      outcome: outcomeBalance,
      total: totalBalance,
    };

    return balance;
  }
}

export default TransactionsRepository;
