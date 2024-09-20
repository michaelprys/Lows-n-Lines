import { useToast as useUiToast } from '@/components/ui/toast/use-toast';

export const useToast = () => {
    const { successMessage, error: fetchError } = useStoreAuth();
    const { toast } = useUiToast();

    const callToast = () => {
        toast({
            title: `${successMessage.value || fetchError.value}`,
            duration: 2000,
            variant: successMessage.value ? 'default' : 'destructive',
        });
    };

    return {
        callToast,
    };
};
