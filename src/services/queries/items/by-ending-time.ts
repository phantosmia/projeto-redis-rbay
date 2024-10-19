import { client } from '../../redis';
import { itemsByEndingKey, itemsKey } from '$services/keys';
import { deserialize } from './deserialize';
import { getItems } from './items';
export const itemsByEndingTime = async (
	order: 'DESC' | 'ASC' = 'DESC',
	offset = 0,
	count = 10
) => {
	const ids = await client.zRange(itemsByEndingKey(), Date.now(), '+inf', {
		BY: 'SCORE',
		LIMIT: {offset, count},
	});
	console.log(ids);
	const results = await Promise.all(ids.map((id) => 
		client.hGetAll(itemsKey(id))
	));
	
	return results.map((item, i) => deserialize(ids[i],item));
};
