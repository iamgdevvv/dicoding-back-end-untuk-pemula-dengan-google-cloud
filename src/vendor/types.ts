import { z } from 'zod';

const BookSchema = z
	.object({
		id: z.string('ID buku wajib dalam format string').optional(),
		name: z.string('Mohon isi nama buku').min(1, 'Mohon isi nama buku'),
		year: z
			.number('Tahun buku wajib dalam format number')
			.min(0, 'Tahun buku tidak bisa kurang dari waktu 0')
			.max(
				new Date().getFullYear(),
				'Tahun buku tidak bisa melebihi waktu saat ini',
			),
		author: z
			.string('Penulis buku wajib dalam format string')
			.min(1, 'Mohon isi penulis buku'),
		summary: z
			.string('Rangkuman buku wajib dalam format string')
			.min(1, 'Mohon isi rangkuman buku'),
		publisher: z
			.string('Penerbit buku wajib dalam format string')
			.min(1, 'Mohon isi penerbit buku'),
		pageCount: z.number('Mohon isi total halaman buku'),
		readPage: z.number('Mohon isi halaman terakhir buku'),
		reading: z.boolean('Mohon isi true/false untuk sedang baca buku'),
		finished: z
			.boolean('Selesai baca buku wajib dalam format boolean')
			.optional(),
		insertedAt: z
			.string('Tanggal buku wajib dalam format string')
			.optional(),
		updatedAt: z
			.string('Tanggal buku wajib dalam format string')
			.optional(),
	})
	.refine((data) => data.readPage <= data.pageCount, {
		message: 'readPage tidak boleh lebih besar dari pageCount',
		path: ['readPage'], // path of error
	});

type IBook = z.infer<typeof BookSchema>;

export { BookSchema, IBook };
