const getISOString = (date: string): string => {
  const formattedDate = date.replace(/(th|nd|st)/, '')
  return new Date(formattedDate).toISOString()
}
export default getISOString
