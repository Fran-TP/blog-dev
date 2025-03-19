export const formatDate = (date: string): string => {
  const normalizedDate = date.includes('T') ? date.split('T')[0] : date
  const fmt = new Intl.DateTimeFormat('en', {
    dateStyle: 'long',
  })
  return fmt.format(new Date(`${normalizedDate}T00:00:00`))
}

export const convertToSlug = (slug: string) => {
  return slug.replace(/\s+/g, '-').toLowerCase()
}