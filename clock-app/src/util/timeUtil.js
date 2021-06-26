import dayjs from 'dayjs';

export const getCurrentTime = () => {
    const date = dayjs(new Date());
    const hour = date.hour();
    const minute = date.minute();
    return { hour, minute };
}
