import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BooksService } from './books.service';
import { BookInterface } from '../../interfaces/books/book.interface';
import { mockBooksList } from '../../mocks/books.mocks';

describe('BooksService', () => {
    let service: BooksService;
    let httpController: HttpTestingController;

    let apiUrl = '/api/books';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BooksService],
        });

        service = TestBed.inject(BooksService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeDefined();
    });

    it('should call fetch() and return an array of books', () => {
        service.fetch().subscribe((res: BookInterface[]) => {
            expect(res).toEqual(mockBooksList);
        });

        const req = httpController.expectOne({
            method: 'GET',
            url: apiUrl,
        });

        req.flush(mockBooksList);
    });

    afterEach(() => {
        httpController.verify();
    });
});
