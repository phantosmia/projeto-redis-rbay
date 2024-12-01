export const pageCacheKey = (id: string) => 'pagecache#' + id;

export const usersKey = (userId: string) => 'users#' + userId;

export const sessionsKey = (sessionId: string) => 'sessions#' + sessionId;

export const itemsKey = (itemId: string) => 'items#' + itemId;

export const usernamesUniqueKey = () => 'usernames:unique';

export const userLikesKey = (userId: string) => 'users:likes#' + userId;

export const usernamesKey = () => 'usernames';

export const itemsbyViewsKey = () => 'items:views';

export const itemsByEndingKey = () => 'items:ending';

export const itemsViewsKey = (itemId: string) => 'items:views#' + itemId;

export const bidHistoryKey = (itemId: string) => 'history#' + itemId;

export const itemsByPriceKey = () => 'items:price';

export const itemsIndexKey = () => 'idx:items';