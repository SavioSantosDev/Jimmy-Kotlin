import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-img',
  templateUrl: './box-img.component.html',
  styleUrls: ['./box-img.component.scss']
})
export class BoxImgComponent implements OnInit {

  /**
   * Este componente receberá
   */

  @Input() linkImg: string;   // Caminho da imagem
  @Input() name: string;      // Nome da imagem ou album
  @Input() likes: number;     // Quantidade de likes da foto ou album
  @Input() isAlbum = false;   // true se for um album

  url: string;  // Concatenar o link dentro da função Css 'url'

  constructor() { }

  ngOnInit(): void {
    this.url = `url(${this.linkImg})`;
    console.log(this.isAlbum);
  }

}
