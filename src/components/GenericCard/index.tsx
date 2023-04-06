type GenericCardProps = {
  text: string
  value: number
}

export function GenericCard({ text, value }: GenericCardProps) {
  return (
    <div className='p-6 bg-white border border-[#E5E5E5] rounded-lg w-80'>
      <p className='text-[#A7B1C2] font-semibold'>{text}</p>
      <p className='text-[#1E3146] font-bold text-4xl'>
        {value}
      </p>
    </div>
  )
}
