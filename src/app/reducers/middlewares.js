
export const throwMiddleware = () => (next) => (action) => {
    next(action);
    if (action?.error) {
        throw action.error;
    }
};