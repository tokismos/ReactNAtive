import moment from 'moment';

export const getTime = async () => {

    const response = await fetch('http://worldtimeapi.org/api/timezone/Africa/Casablanca');
    const res = await response.json();

    return res.unixtime;
}

export const getFormatedTime = (text) => {
    const time = moment(text, 'X').format('MMMM Do YYYY, HH:mm ')
    return time;

}


