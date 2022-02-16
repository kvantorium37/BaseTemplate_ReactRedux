export const calculateMainCheckbox = (options = [], singleCountLabel = "", multiCountLabel = "") => {
    const mainOption = {
        label: "0 units",
        checked: false,
    };

    options.forEach((option) => {
        if (option.checked) mainOption.checked = true;
    });

    let unitsCount = options.length;

    if (unitsCount == 1) {
        mainOption.label = `1 ${singleCountLabel}`;
        return mainOption;
    }

    mainOption.label = `${unitsCount} ${multiCountLabel}`;
    return mainOption;
};
