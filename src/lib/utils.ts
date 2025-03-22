export const formatDate = (date: string): string => {
  const normalizedDate = date.includes('T') ? date.split('T')[0] : date
  const fmt = new Intl.DateTimeFormat('en', {
    dateStyle: 'long'
  })
  return fmt.format(new Date(`${normalizedDate}T00:00:00`))
}

export const convertToSlug = (slug: string) => {
  return slug.replace(/\s+/g, '-').toLowerCase()
}

export const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

export const generatePagination = ({
  currentPage,
  totalPages,
  siblingCount = 1
}: {
  currentPage: number
  totalPages: number
  siblingCount?: number
}) => {
  const DOTS = '...'
  const firstPageIndex = 1
  const lastPageIndex = totalPages

  // total sibling count is determined by firstPage + lastPage + currentPage + 2 * DOTS
  const totalSiblingCount = siblingCount + 5

  if (totalPages <= totalSiblingCount) {
    return range(firstPageIndex, totalPages)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  // there should bet at least 2 sibling items between firstPage and currentPage on the left side of the currentPage and 2 sibling items between currentPage and lastPage on the right side of the currentPage
  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPages - 2

  // case 1: no left dots to show, but right dots to show

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = range(firstPageIndex, leftItemCount)

    return [...leftRange, DOTS, totalPages]
  }

  // case 2: left dots to show, but no right dots to show
  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = range(totalPages - rightItemCount + 1, totalPages)

    return [firstPageIndex, DOTS, ...rightRange]
  }

  // case 3: both left and right dots to show
  if (shouldShowLeftDots && shouldShowRightDots) {
    const leftRange = range(leftSiblingIndex, rightSiblingIndex)

    return [firstPageIndex, DOTS, ...leftRange, DOTS, lastPageIndex]
  }

  return []
}
