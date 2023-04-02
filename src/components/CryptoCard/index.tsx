import filledStar from '../../assets/favorito_ativo.svg'

export function CryptoCard() {
  return (
    <li className='flex border bg-white border-slate-300 rounded-lg px-6 py-4 mr-6'>
      <div className='flex items-center text-4xl font-bold mr-3'>
        1
        <img src={filledStar} alt="estrela preenchida" />
      </div>

      <div className='whitespace-nowrap'>
        <div className='flex items-center'>
          <h1 className='font-mono font-bold text-2xl'>BCH</h1>
          <span className='text-[#16C784]'>▲</span>
        </div>
        <p className='text-[#A7B1C2]'>R$ 1.844,39</p>
        <p className='text-[#16C784]'>+10,44%</p>
      </div>
    </li>
  )
}
