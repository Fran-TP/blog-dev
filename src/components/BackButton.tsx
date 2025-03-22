interface Props {
    children: React.ReactNode
}


const BackButton = ({ children }: Props) => {
  return (
    <button
      className='cursor-pointer mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-pink-400'
      onClick={() => window.history.back()}
    >
      {children}
    </button>
  )
}

export default BackButton
