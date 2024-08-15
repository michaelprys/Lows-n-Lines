export interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  member_since: Date;
}

export const useStoreAuth = defineStore("storeAuth", {
  state: () => ({
    registered: false,
    loading: false,
    error: null as string | null,
    successMessage: null as string | null,
  }),
  actions: {
    async registerUser(user: UserData) {
      const config = useRuntimeConfig();
      this.loading = true;
      this.error = null;
      this.successMessage = null;

      const { error, status } = await useFetch(
        `${config.public.apiBase}/registration`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        },
      );
      if (status.value === "success") {
        this.registered = true;
        this.successMessage = "Successfully registered";
      } else if (error.value.statusCode === 409) {
        this.error = "User already exists";
      } else {
        this.error = `Unexpected response status ${error.value.statusCode}`;
      }

      this.loading = false;
    },
  },
});
