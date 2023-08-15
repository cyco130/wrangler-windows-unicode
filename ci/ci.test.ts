import { it, expect } from 'vitest';

it('serves non-ascii file', async () => {
	const res = await fetch('http://127.0.0.1:8787/foo/bar.txt');
	const text = await res.text();
	expect(text).toContain('Hello, world!');
});
