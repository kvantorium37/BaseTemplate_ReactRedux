const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
};

// 2021-06-07T01:00:00.000Z -> 01:00
export function USFormatDate(dateString) {
    let [date, time] = dateString.replace("Z", "").split("T");

    date = date.split("-").reverse().join(".");
    const [hours, minutes] = time.split(".")[0].split(":");

    return `${hours}:${minutes}`;
}

// 2021-06-07 -> Ср. 19 мая
export function dateToWeekDayMonth(dateString) {
    if (!dateString) {
        return "";
    }

    const dateObj = new Date(dateString);

    let [year, monthKey, day] = dateString.split("-");

    const weekDayIndex = dateObj.getDay();

    const weekDay = weekDays[weekDayIndex];
    const month = months[monthKey];

    day = parseInt(day);
    return `${weekDay}, ${day} ${month}`;
}

// 2021-06-07T12:00:00 -> Ср. 19 мая, 12:00:00
export function dateWithTimeToWeekDayMonth(dateString) {
    if (!dateString) {
        return "";
    }

    let dateObj = new Date(dateString);


    const splittedDate = dateString.split("T");

    let date = splittedDate[0];
    let time = splittedDate[1];

    if (!time) {
        return dateString
    }

    time = time.replace("Z", "");

    const [year, monthKey, day] = date.split("-");

    const weekDayIndex = dateObj.getDay();

    const weekDay = weekDays[weekDayIndex];
    const month = months[monthKey];

    return `${weekDay}, ${day} ${month}, ${time}`;
}




// 2021-06-07T12:00:00Z -> May 19, 2021
export function dateTimeToDate(dateString) {
    if (!dateString) {
        return "";
    }


    const splittedDate = dateString.split("T");

    let date = splittedDate[0];
    let time = splittedDate[1];

    if (!time) {
        return dateString
    }

    time = time.replace("Z", "");
    time = time.replace(":00:00", ":00");

    let [year, monthKey, day] = date.split("-");

    const month = months[monthKey];


    if (parseInt(day) < 10) {
        day = day.replace("0", "")
    }

    return `${month} ${day}, ${year}`;
}

// 2021-06-07T12:00:00Z -> 19 мая 2021, 12:00
export function dateWithTimeToFullDateTime(dateString) {
    if (!dateString) {
        return "";
    }

    let dateObj = new Date(dateString);


    const splittedDate = dateString.split("T");

    let date = splittedDate[0];
    let time = splittedDate[1];

    if (!time) {
        return dateString
    }

    time = time.replace("Z", "");
    time = time.replace(":00:00", ":00");

    let [year, monthKey, day] = date.split("-");

    const weekDayIndex = dateObj.getDay();

    const month = months[monthKey];


    if (parseInt(day) < 10) {
        day = day.replace("0", "")
    }

    return `${day} ${month} ${year}, ${time}`;
}