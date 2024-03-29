import { PaginateResult } from 'mongoose';
import { LoggerModel } from '../../model/logger';

interface ICreateLoggerUseCase {
  execute(logger: LoggerModel): Promise<void>;
  listAllLogs(
    action: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    proprietaryId: string,
    currentPage?: string
  ): Promise<Array<LoggerModel>>;
}

export default ICreateLoggerUseCase;