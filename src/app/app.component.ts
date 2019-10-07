import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    /**
     * @property {string} showSpinner Flag que indica cuando mostrar el spinner
     */
    public showSpinner: boolean;
    /**
     * @property {any} data Informacion que se le mostrara al usuario
     */
    public data: any;
    /**
     * @property {number} selectedRow Almacena el row seleccionado
     */
    public selectedRow: number;

    constructor(
        private postService: PostService,
        private snackBar: MatSnackBar
    ) {
        this.selectedRow = -1;
        this.showSpinner = true;
    }

    ngOnInit(): void {
        this.postService.getAllPost().subscribe( resp => {
            this.data = resp.allPosts.filter( a => {
                if ((a.title || a.story_title) && !a.hidden) {
                    return a;
                }
            });
            this.showSpinner = false;
        }, err => {
            this.showSpinner = false;
        });
    }

    /**
     * Toggle para guardar el evento del click en el row seleccionado
     * @param {number} index Del usuario seleccionado
     * @method clickedRow
     */
    public clickedRow(index: number): void {
        if (this.selectedRow === index) {
            this.selectedRow = -1;
        } else {
            this.selectedRow = index;
            this.openUrl(this.data[this.selectedRow]);
        }
    }

    /**
     * Funcion para abrir un nuevo tab en el navegador con la informacion del post seleccionada
     * @param {any} item Item seleccionado por el usuario
     * @method deletePost
     */
    openUrl(item: any): void {
        if (item.story_url) {
            window.open(item.story_url, '_blank');
        }
        if (item.url) {
            window.open(item.url, '_blank');
        }
    }

    /**
     * Funcion para borrar el item seleccionado por el usuario
     * @method deletePost
     */
    public deletePost(): void {
        this.showSpinner = true;
        const { created_at_i } = this.data[this.selectedRow];
        this.postService.deletePost(created_at_i).subscribe( () => {
            this.showSnackBar('Eliminado correctamente');
            this.showSpinner = false;
            this.data = this.data.filter(item => item.created_at_i !== created_at_i );
        }, err => {
            this.showSpinner = false;
        });
    }

    /**
     * Mostrar el snackbar
     * @param {string} msg Mensaje para mostrar
     * @param {number} duration Duración del evento
     * @method clickedRow
     */
    private showSnackBar(msg: string, duration = 2000): void {
        this.snackBar.open(msg, '', { duration });
    }
}
