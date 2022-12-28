import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MensagemService {
    
    public notifier = new EventEmitter<Retorno>();

    public mostrarMensagemAlerta(mensagem: string): void {
        this.notifier.emit({ mensagem, sucesso: false });
    }

    public mostrarMensagemSucesso(mensagem: string): void {
        this.notifier.emit({ mensagem, sucesso: true });
    }
}

interface Retorno {
    mensagem: string,
    sucesso: boolean
}