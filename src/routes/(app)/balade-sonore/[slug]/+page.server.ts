import { redirect } from '@sveltejs/kit';
import { ardoises, type Ardoise } from '../../data.ts';

export function load({ params }) {
    const index = +params.slug - 1;
	const ardoise = ardoises[index];

    console.log(params.slug);
  
	if (!ardoise) throw redirect(307, '/balade-sonore/1');

    const result: { ardoise: Ardoise, previous?: Ardoise, next?: Ardoise } = { ardoise };

    if (index >= 1) {
        result.previous = ardoises[index - 1];
    }

    if (index < ardoises.length) {
        result.next = ardoises[index + 1];
    }

	return result;
}