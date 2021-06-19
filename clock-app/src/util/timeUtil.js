export const getCurrentTime = () => {
    const today = new Date();
    const hours = today.getHours();
    const minute = today.getMinutes();
    const seconds = today.getSeconds();
    return { hours, minute, seconds };
}