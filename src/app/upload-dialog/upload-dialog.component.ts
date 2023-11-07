import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {
  selectedFiles: FileList | null = null;
  invoiceNumber: string = '';

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = input.files;
    }
  }

  uploadFiles() {
    if (this.selectedFiles) {
      // Aqui você pode implementar o upload dos arquivos e o uso do número da fatura
      console.log(`Número da Fatura: ${this.invoiceNumber}`);
      console.log(`Arquivos Selecionados:`, this.selectedFiles);
      this.convertFilesToBase64AndUpload()
      // Fechar modal após o upload (você precisará chamar a função do Bootstrap para fechar)
      //$('#uploadModal').modal('hide');
    }
  }
  
  convertFilesToBase64AndUpload() {
    if (this.selectedFiles) {
      Array.from(this.selectedFiles).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          // O resultado é um string em base64 que você pode enviar para a API
          const base64 = e.target?.result as string;
          this.uploadFileToApi(base64);
        };
        reader.readAsDataURL(file);
      });
    }
  }

  uploadFileToApi(base64: string) {
    // Aqui você implementaria o envio do arquivo em base64 para a sua API
    console.log(base64);

    // Exemplo de como você poderia chamar a API:
    // this.http.post('sua-api/upload', { file: base64, invoiceNumber: this.invoiceNumber })
    //   .subscribe(response => {
    //     console.log('Upload bem-sucedido', response);
    //   }, error => {
    //     console.error('Erro no upload', error);
    //   });
  }
}
