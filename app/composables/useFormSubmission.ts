import { safeParse, flatten, type FlatErrors } from 'valibot';

export const useFormSubmission = (includeSubject: boolean = false) => {
    const issues = ref<FlatErrors<typeof MessageSchema>['nested']>();
    const {
        messageSent,
        sendMessage,
        error: fetchError,
        pending,
    } = useStoreAuth();
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

    const submitForm = async () => {
        if (pending.value) return;
        fetchError.value = '';
        const result = safeParse(MessageSchema, messageData);

        if (result.success) {
            issues.value = {};
            await sendMessage(messageData);
            if (messageSent.value) {
                callToast();
                resetForm();
            }
        } else {
            issues.value = flatten<typeof MessageSchema>(result.issues).nested;
        }
    };
    return { messageData, issues, submitForm, resetForm };
};
