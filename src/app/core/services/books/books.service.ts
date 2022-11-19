import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BookInterface } from '../../interfaces/books/book.interface';

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    private apiUrl = '/api/books';

    constructor(private http: HttpClient) {}

    fetch(): Observable<BookInterface[]> {
        return this.http.get<BookInterface[]>(this.apiUrl);
    }
}
