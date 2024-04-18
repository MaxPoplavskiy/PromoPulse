export type UserContext = {
    user: string | null,
    updateUserFromLocalStorage: () => void;
}