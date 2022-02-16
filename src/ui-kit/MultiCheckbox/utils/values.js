export const calculateAllValues = (options = []) => {
    return options.map(option => option.checked)
};
