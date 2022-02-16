export const addThunkStatuses = (builder, thunk, statusKey) => {
    builder.addCase(thunk.rejected, (state) => state[statusKey] = "rejected");
    builder.addCase(thunk.pending, (state) => state[statusKey] = "pending");
}