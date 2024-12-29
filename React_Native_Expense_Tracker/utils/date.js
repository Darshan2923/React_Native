
export const getFormattedDate = (date) => {
    if (!(date instanceof Date)) {
        date = new Date(date); // Convert strings or invalid values to Date
    }
    if (isNaN(date)) return "Invalid Date"; // Handle invalid dates gracefully
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};


export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}