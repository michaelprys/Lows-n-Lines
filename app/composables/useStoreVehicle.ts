import type { ApiRes } from '~/types';

export interface Vehicle {
    id: number;
    manufacture_year: number;
    brand: string;
    model: string;
    miles: number;
    engine_type: string;
    engine_size: number;
    transmission_type: string;
    brakes: string;
    body_color: string;
    interior_color: string;
    upholstery: string;
    headliner: string;
    tires: string;
    battery: string;
    price: number;
    cover_name: string;
    cover_width: number;
    cover_height: number;
    cover_blurhash: string;
    slug: string;
}

export const useStoreVehicle = () => {
    const { apiBase } = useRuntimeConfig().public;

    const { data: vehicles, status: vehicleStatus } = useFetch<
        ApiRes<Vehicle[]>
    >(`${apiBase}/vehicle`, {
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

    const selectVehicle = (id: number) => {
        useCookie('selectedVehicle').value = id.toString();
    };

    return {
        vehicles,
        isVehicleLoading: vehicleStatus.value === 'pending',
        isVehicleError: vehicleStatus.value === 'error',
        selectVehicle,
    };
};
