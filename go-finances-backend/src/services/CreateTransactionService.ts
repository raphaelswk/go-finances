import { getRepository, getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  categoryTitle: string;
}

class CreateTransactionService {
  public async execute({ title, value, type, categoryTitle }: Request): Promise<Transaction> {
    const categoryRepository = getRepository(Category);
    const transactionRepository = getCustomRepository(TransactionsRepository);

    let category = await categoryRepository.findOne({
      where: { title: categoryTitle },
    });

    if (type === 'outcome') {
      const balance = await transactionRepository.getBalance();
      if (balance.total < value) {
        throw new AppError('The balance is not enough for the outcome', 400);
      }
    }

    if (!category) {
      category = categoryRepository.create({
        title: categoryTitle
      });

      await categoryRepository.save(category);
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id: category.id,
      category
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
