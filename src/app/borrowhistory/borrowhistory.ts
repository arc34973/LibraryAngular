import { Book } from '../books/book';
import { Borrowhistory } from './borrowhistory';
import { User } from '../users/user';

export interface Borrowhistory {
    id: number;
    user: User;
    book: Book;
    dateBorrow: string;
    dateTurnback: string;
}
