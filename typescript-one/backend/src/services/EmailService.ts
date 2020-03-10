interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
    //attachment?: Array<string>;// Outra forma de declarar array | item não obrigatório sinalizado por ?
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

// Data Transfer Object (DDD)
class EmailService implements IEmailService{
    //sendMail(to: IMailTo, message: IMailMessage) { 
    sendMail({to, message}: IMessageDTO) { //destructuring
        console.log(`Email enviado para ${to.name}: ${message.subject}`); //template string
    }
}

export default EmailService;