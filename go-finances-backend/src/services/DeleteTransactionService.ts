import AppError from '../errors/AppError';
import { getRepository } from 'typeorm';
import Transaction from '../models/Transaction';


interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    const repository = await transactionRepository.findOne({ id });

    if (!repository) {
      throw new AppError('Transaction not found', 404);
    }

    await transactionRepository.remove(repository);
  }
}

export default DeleteTransactionService;
