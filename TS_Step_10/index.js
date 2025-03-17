"use strict";
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Pending"] = "pending";
    TransferStatus["Rejected"] = "rejected";
    TransferStatus["Completed"] = "completed";
})(TransferStatus || (TransferStatus = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NotFound"] = "Not found: 404";
    ErrorMessages["NotEnoughSpace"] = "Not enough space: 507";
    ErrorMessages["Forbidden"] = "Forbidden: 403";
})(ErrorMessages || (ErrorMessages = {}));
// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer {
    constructor(status) {
        // Место для реализаций
        this.start = (p, d) => {
            return `Transfer was Started`;
        };
        // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
        // Можно вывести в консоль данные, можно вернуть строку
        this.checkTransferStatus = () => {
            return this.transferStatus;
        };
        this.makeError = () => {
            return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`;
        };
        this.transferStatus = status;
    }
    stop(a) {
        var _a;
        return `Your prompt was stopped at ${(_a = this.date) === null || _a === void 0 ? void 0 : _a.toDateString()} `;
    }
}
const singeTransfer = new SingleFileTransfer(TransferStatus.Completed);
// singeTransfer.checkTransferStatus(TransferStatus.Rejected);
// console.log(singeTransfer);
console.log(singeTransfer.start('hello', ['asdf', 'asdf']));
console.log(singeTransfer.checkTransferStatus());
console.log(singeTransfer.stop('asdf'));
