import { YMapsApi } from 'react-yandex-maps';

export const directGeocoding = (maps: YMapsApi, point: string): Promise<YMapsApi> => maps.geocode(point, { results: 1 });
