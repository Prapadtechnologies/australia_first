import moment from "moment";

export const convertToDbFormat = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
