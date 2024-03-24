import moment from "moment";

export const convertToDbFormat = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
}

export const covertToReadableFormat = (date) => {
    return `${moment(date).format('DD')} ${moment(date).format('MMM')} ${moment(date).format('YYYY')}`;
}
