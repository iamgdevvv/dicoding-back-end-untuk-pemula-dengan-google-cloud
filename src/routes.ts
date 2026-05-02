import { ServerRoute } from '@hapi/hapi';
import {
	addBookHandler,
	getAllBooksHandler,
	getBookByIdHandler,
	editBookByIdHandler,
	deleteBookByIdHandler,
} from './handler';

const routes: ServerRoute[] = [
	{
		method: 'POST',
		path: '/books',
		handler: addBookHandler,
	},
	{
		method: 'GET',
		path: '/books',
		handler: getAllBooksHandler,
	},
	{
		method: 'GET',
		path: '/books/{bookId}',
		handler: getBookByIdHandler,
	},
	{
		method: 'PUT',
		path: '/books/{bookId}',
		handler: editBookByIdHandler,
	},
	{
		method: 'DELETE',
		path: '/books/{bookId}',
		handler: deleteBookByIdHandler,
	},
];

export default routes;
