export const getNewDateFormat = () => {
  const currentDate = new Date();
  const newFormatDate = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;
  return newFormatDate;
};

export const setNewTimeFormat = date => {
  const oldTimeFormat = new Date(date);
  const newTimeFormat = `${oldTimeFormat.getHours()}:${oldTimeFormat.getMinutes()}`;
  return newTimeFormat;
};

export const todayDate = `${getNewDateFormat().split('-')[0]}/${getNewDateFormat().split('-')[1]}`;
export const yesterdayDate = `${+todayDate.split('/')[0] - 1}/${todayDate.split('/')[1]}`;
export const tomorrowDate = `${+todayDate.split('/')[0] + 1}/${todayDate.split('/')[1]}`;
