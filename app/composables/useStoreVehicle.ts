import type { ErrorResponse } from '~/types';

interface Image {
    id: number;
    name: string;
    width: number;
    height: number;
    skeleton_height?: number;
    blurhash?: string;
}

interface Vehicle {
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
}

const state = reactive({
    pending: false,
    vehicles: [] as Vehicle[],
    vehicle_images: [] as Image[],
});

export const useStoreVehicle = () => {
    const { apiBase } = useRuntimeConfig().public;

    const getVehicle = async () => {
        state.pending = true;

        try {
            const res = await $fetch<{ data: Vehicle[] }>(`${apiBase}/vehicle`);
            state.vehicles = res.data;
            console.log('Vehicle loaded: ', res.message);
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;
            console.log('Error loading vehicles: ', err.statusMessage);
        } finally {
            state.pending = false;
        }
    };

    const getVehicleImage = async () => {
        state.pending = true;

        try {
            const res = await $fetch<{ data: Image[] }>(
                `${apiBase}/vehicle-images`
            );
            state.vehicle_images = res.data;
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;
            console.log('Error loading vehicles: ', err.statusMessage);
        } finally {
            state.pending = false;
        }
    };

    const getSrc = (path: string, name: string, ext: string) => {
        return `/images/${path}/${name}${ext}`;
    };

    return {
        ...toRefs(state),
        getVehicle,
        getVehicleImage,
        getSrc,
    };
};
