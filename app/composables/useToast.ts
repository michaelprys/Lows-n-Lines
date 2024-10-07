import { useToast as useUiToast } from '@/components/ui/toast/use-toast';

export const useToast = () => {
    const { toast } = useUiToast();

    const callToast = (successMessage: string, fetchError: string | null) => {
        toast({
            title: `${successMessage || fetchError}`,
            duration: 2000,
            variant: successMessage ? 'default' : 'destructive',
        });
    };

    return {
        callToast,
    };
};
