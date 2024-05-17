export const getHoursFromTimestamp = (timestamp: string): number => {
  const date = new Date(timestamp)
  return date.getHours()
}
