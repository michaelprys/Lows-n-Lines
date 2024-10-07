import type { ApiRes } from '~/types';

export interface Image {
    id: number;
    vehicle_id: number;
    name: string;
    slug: string;
    width: number;
    height: number;
    skeleton_height?: number;
    blurhash?: string;
}

export const useStoreVehicleImgs = route => {
    const { apiBase } = useRuntimeConfig().public;

    const slug = route.params.slug;

    const { data: vehicleImages, status: vehicleImgStatus } = useFetch<
        ApiRes<Image[]>
    >(`${apiBase}/vehicle-images?slug=${slug}`, {
        transform(input) {
            return {
                ...input,
                fetchedAt: new Date(),
            };
        },
        getCachedData(key) {
            return loadCache(key);
        },
    });

    return {
        vehicleImages,
        isVehicleImgLoading: vehicleImgStatus.value === 'pending',
        isVehicleImgError: vehicleImgStatus.value === 'error',
    };
};
