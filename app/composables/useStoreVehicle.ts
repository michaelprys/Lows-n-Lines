import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse, ApiRes } from '~/types';

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
    door_panels: string;
    headliner: string;
    steering_system: string;
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

    const state = useState('vehicles', () => ({
        vehicles: [] as Vehicle[],
        vehiclesByType: [],
        pending: false,
    }));

    const { status: vehicleStatus, refresh: vehicleRefresh } = useFetch<ApiRes<Vehicle[]>>(`${apiBase}/vehicle`, {
        immediate: false,
        onResponse({ response }) {
            state.value.vehicles = response._data.data ?? [];
        },
    });

    const selectVehicle = (id: number) => {
        useCookie('selectedVehicle').value = id.toString();
    };

    const getVehicleByType = async (selectedType: string) => {
        const { apiBase } = useRuntimeConfig().public;

        try {
            state.value.pending = true;
            const res = await $fetch<ApiRes<Vehicle[]>>(`${apiBase}/vehicles-type?type=${selectedType}`);
            state.value.vehiclesByType = res.data ?? [];
        } catch (e) {
            const err = ensureError(e) as ErrorResponse;
            console.error(err);
        } finally {
            state.value.pending = false;
        }
    };

    return {
        isVehicleLoading: vehicleStatus.value === 'pending',
        isVehicleError: vehicleStatus.value === 'error',
        selectVehicle,
        vehicles: computed(() => state.value.vehicles),
        vehiclesByType: computed(() => state.value.vehiclesByType),
        getVehicleByType,
        vehicleRefresh,
    };
};
