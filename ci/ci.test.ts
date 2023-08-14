import { it, expect } from 'vitest';

it('serves non-ascii file', async () => {
	const res = await fetch('http://127.0.0.1:8787/🙂🙂🙂');
	const text = await res.text();
	expect(text).toContain('🙂🙂🙂');
});

it('serves non-ascii file with percent encoding', async () => {
	const res = await fetch('http://127.0.0.1:8787/%F0%9F%99%82%F0%9F%99%82%F0%9F%99%82');
	const text = await res.text();
	expect(text).toContain('🙂🙂🙂');
});
