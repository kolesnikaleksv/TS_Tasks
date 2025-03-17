enum TransferStatus {
  Pending = 'pending',
  Rejected = 'rejected',
  Completed = 'completed',
}

enum ErrorMessages {
  NotFound = 'Not found: 404',
  NotEnoughSpace = 'Not enough space: 507',
  Forbidden = 'Forbidden: 403',
}

interface ITransfer {
  path: string;
  data: string[];
  date?: Date;
  start: (p: string, d: string[]) => string;
  stop: (reason: string) => string;
}

interface TransferError {
  message: ErrorMessages;
}

// The class must implement ITransfer and TransferError

class SingleFileTransfer implements ITransfer, TransferError {
  path: string = '';
  data: string[] = [];
  date?: Date;
  transferStatus: TransferStatus;
  message: ErrorMessages;

  constructor(
    status: TransferStatus,
    errorMessage: ErrorMessages = ErrorMessages.NotFound
  ) {
    this.transferStatus = status;
    this.message = errorMessage;
  }

  // Place for implementations

  start = (p: string, d: string[]): string => {
    this.path = p;
    this.data = d;
    this.transferStatus = TransferStatus.Pending;
    return `Transfer started at path: ${p} with ${d.length} files.`;
  };

  // It is necessary to create the `checkTransferStatus` method, which checks the data transfer status
  // You can either log the data to the console or return a string

  checkTransferStatus = (): string => {
    return `Current transfer status: ${this.transferStatus}`;
  };

  // It is necessary to create a method that will stop the data transfer
  // and return a string with the reason and the stop date (Date in any format)

  stop(reason: string): string {
    this.date = new Date();
    this.transferStatus = TransferStatus.Rejected;
    return `Transfer stopped at ${this.date.toISOString()} due to: ${reason}`;
  }

  // It is necessary to create a method that will return a string containing
  // the transfer status and any error message. You can choose the message yourself
  // or base it on the incoming argument
  // This method may seem unusual, but it can be used for testing, for example

  makeError(errorMessage: ErrorMessages): string {
    this.message = errorMessage;
    this.transferStatus = TransferStatus.Rejected;
    return `Status: ${this.transferStatus}, Error message: ${this.message}`;
  }
}

const singleTransfer = new SingleFileTransfer(TransferStatus.Completed);

console.log(singleTransfer.start('/user/docs', ['file1.txt', 'file2.txt']));
console.log(singleTransfer.checkTransferStatus());
console.log(singleTransfer.stop('Network failure'));
console.log(singleTransfer.makeError(ErrorMessages.NotEnoughSpace));
