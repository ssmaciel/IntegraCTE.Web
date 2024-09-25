import { Component, EventEmitter, Output } from '@angular/core';
import { ArquivoInputRequest } from '../shared/models/arquivo-input-request';

@Component({
  selector: 'app-upload-zip-dialog',
  templateUrl: './upload-zip-dialog.component.html',
  styleUrls: ['./upload-zip-dialog.component.scss']
})
export class UploadZipDialogComponent {
  selectedFile: File | null = null;
  invoiceNumber: string = '';


  @Output() informacaoEnviada = new EventEmitter<ArquivoInputRequest>();

  onFilesSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFiles() {
    if (this.selectedFile) {
      console.log(`Número da Fatura: ${this.invoiceNumber}`);
      console.log(`Arquivos Selecionados:`, this.selectedFile);
      this.uploadFileToApi()
    }
  }

  uploadFileToApi() {
    let input: ArquivoInputRequest = {
      fatura: this.invoiceNumber,
      xmlbase64: "",
      file: this.selectedFile
    };
    
    this.informacaoEnviada.emit(input);
  }
}
