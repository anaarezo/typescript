"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Data Transfer Object (DDD)
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    //sendMail(to: IMailTo, message: IMailMessage) { 
    EmailService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email enviado para " + to.name + ": " + message.subject); //template string
    };
    return EmailService;
}());
exports.default = EmailService;
