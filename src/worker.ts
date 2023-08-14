import '@cloudflare/workers-types';
import { MethodNotAllowedError, NotFoundError, getAssetFromKV } from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';
const assetManifest = JSON.parse(manifestJSON);

export interface Env {
	__STATIC_CONTENT: KVNamespace;
}

export default {
	async fetch(request, env, ctx) {
		const list = await env.__STATIC_CONTENT.list();
		console.log(JSON.stringify(list));

		try {
			return await getAssetFromKV(
				{
					request,
					waitUntil(promise) {
						return ctx.waitUntil(promise);
					},
				},
				{
					ASSET_NAMESPACE: env.__STATIC_CONTENT,
					ASSET_MANIFEST: assetManifest,
				}
			);
		} catch (error) {
			if (error instanceof NotFoundError) {
				// ...
			} else if (error instanceof MethodNotAllowedError) {
				// ...
			} else {
				return new Response('An unexpected error occurred', { status: 500 });
			}
		}

		return new Response('Nope!');
	},
} satisfies ExportedHandler<Env>;

const x = new ReadableStream();
