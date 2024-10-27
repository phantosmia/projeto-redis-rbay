import {client} from '$services/redis';
import { itemsKey, itemsbyViewsKey, itemsViewsKey } from '$services/keys';

export const incrementView = async (itemId: string, userId: string) => {
    const inserted = await client.pfAdd(itemsViewsKey(itemId), userId);
    if (inserted) {
        return Promise.all([
            client.hIncrBy(itemsKey(itemId), 'views', 1),
            client.zIncrBy(itemsbyViewsKey(), 1, itemId),
        ]);
}
};
