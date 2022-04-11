import { Component, TemplateRef } from '@angular/core';
import { ToastsService } from 'src/app/services/toasts.service'

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  host: { 'class': 'toast-container position-fixed top-0 end-0 p-3', 'style': 'z-index: 1200' }
})
export class ToastContainerComponent {

  constructor (public toastService: ToastsService) {
  }

  isTemplate (toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
