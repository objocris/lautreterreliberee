import { error } from '@sveltejs/kit';
import { ardoises, type Ardoise } from '../data.js';

export function load({ params }) {
    const index = +params.slug - 1;
	const ardoise = ardoises[index];

    // 6a164c91a926a32b6e3158c1d22a041a58765ff00bf2a3d8e7959b4ed0c85a6769680577b51399bbe97409ba4cca437493f2607196428a92b77858dd36f61663ec85c7ff84643d30bd6c65c5416c76f47f95d35d2e4fa20aa0cf2fb87f80b24895c2b29c0f7f616cd830d0d4be85cec4b8d5aee0a7bf1775a3ac785e98970d9f

    
	if (!ardoise) throw error(404);

    const result: { ardoise: Ardoise, previous?: Ardoise, next?: Ardoise } = { ardoise };

    if (index >= 1) {
        result.previous = ardoises[index - 1];
    }

    if (index < ardoises.length) {
        result.next = ardoises[index + 1];
    }

	return result;
}