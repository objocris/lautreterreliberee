import { redirect } from '@sveltejs/kit';
import { type Ardoise, ardoises } from '../../data.ts';

// @ts-ignore
export function load({params}) {
    const {slug} = params;
    const index = +slug - 1;
    const ardoise = ardoises[index];

    if (!ardoise) throw redirect(307, '/balade-sonore/1');

    const result: { ardoise: Ardoise, previous?: Ardoise, next?: Ardoise } = {ardoise};

    if (index >= 1) {
        result.previous = ardoises[index - 1];
    }

    if (index < ardoises.length) {
        result.next = ardoises[index + 1];
    }

    return result;
}