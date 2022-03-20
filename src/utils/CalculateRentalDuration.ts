import moment from 'moment';

export const CalculateRentalDuration = (dateFrom: string, dateTo: string) => {
  const startDate = moment(dateFrom);
  const endDate = moment(dateTo);

  const duration = moment.duration(startDate.diff(endDate));
  if (Math.abs(duration.asDays()) < 1) {
    const hours = Math.floor(Math.abs(duration.asHours()));
    const minutes = Math.floor(((Math.abs(duration.asMinutes()) / 60) % 1) * 60);
    return `${hours}ч ${minutes}м`;
  }
  if (Math.abs(duration.asDays()) > 1) {
    const days = Math.floor(Math.abs(duration.asDays()));
    const hours = Math.floor(Math.floor(Math.abs(duration.asHours())) - (24 * days));
    const minutes = Math.floor(((Math.abs(duration.asMinutes()) / 60) % 1) * 60);
    return `${days}д ${hours}ч ${minutes}м`;
  }
  return 'Не выбрано';
};
