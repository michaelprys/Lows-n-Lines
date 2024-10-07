import { ensureError } from '~/utils/ensureError';
import type { ErrorResponse } from '~/types';
import { safeParse, flatten, type FlatErrors } from 'valibot';

export interface MessageData {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    subject?: string;
    message: string;
}

const state = reactive({
    pending: false,
    messageSent: false,
    error: null as string | null,
    successMessage: null as string | null,
});

export const useFormSubmission = (includeSubject: boolean = false) => {
    const issues = ref<FlatErrors<typeof MessageSchema>['nested']>();
    const { callToast } = useToast();

    const messageData = reactive<MessageData>({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        subject: includeSubject ? '' : undefined,
        message: '',
    });

    const resetForm = () => {
        messageData.firstname = '';
        messageData.lastname = '';
        messageData.email = '';
        messageData.phoneNumber = '';
        if (includeSubject) messageData.subject = '';
        messageData.message = '';
    };

    const sendMessage = async () => {
        if (state.pending) return;
        state.error = '';
        const result = safeParse(MessageSchema, messageData);

        if (result.success) {
            issues.value = {};
            const { apiBase } = useRuntimeConfig().public;
            state.pending = true;
            state.error = null;
            state.successMessage = null;

            try {
                const res = await $fetch<ResponseData>(`${apiBase}/inquiries`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: messageData,
                });
                state.messageSent = true;
                state.successMessage =
                    res.message || 'Message sent successfully';

                if (state.messageSent) {
                    callToast(state.successMessage, state.error);
                    resetForm();
                }
            } catch (e) {
                const err = ensureError(e) as ErrorResponse;

                if (err.statusCode === 400) {
                    state.error = err.statusMessage || 'Validation error';
                } else if (err.statusCode) {
                    state.error = err.statusMessage || 'Error sending message';
                } else {
                    state.error = `An unexpected error occurred ${err.message}`;
                }
            } finally {
                state.pending = false;
            }
        } else {
            issues.value = flatten<typeof MessageSchema>(result.issues).nested;
        }
    };
    return {
        ...toRefs(state),
        messageData,
        issues,
        sendMessage,
        resetForm,
    };
};
