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

export const generatePagination = (currentPage: number, totalPages: number) => {
  const MIN_PAGES = 7
  const FIRST_PAGE_LIMIT = 3

  if (totalPages <= MIN_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  if (currentPage <= FIRST_PAGE_LIMIT) {
    return [1, 2, 3, '...', totalPages - 1, totalPages]
  }

  // if the current page is in the 3 last pages
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
  }

  // if the current page is in then middle
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ]
}
