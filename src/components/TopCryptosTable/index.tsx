import filledStar from '../../assets/favorito_ativo.svg'

export function TopCryptoTable() {
  return (
    <div className='flex-1 px-28'>
      <table className='w-full'>
        <tr className='border-b border-[#A7B1C2] pb-4'>
          <th></th>
          <th className='text-center'>#</th>
          <th className='text-left'>Nome</th>
          <th className='text-right'>Preço</th>
          <th className='text-right'>24h %</th>
          <th className='text-right'>7d %</th>
          <th className='text-right'>Valor de mercado</th>
        </tr>
        <tr className='border-b border-[#A7B1C2]'>
          <td>
            <img src={filledStar} alt="estrela preenchida" />
          </td>
          <td>1</td>
          <td className='h-16 flex items-center'>
            <span className='mr-2 bg-[#F7931A] w-5 h-5 rounded-xl inline-block'></span>
            <span className='mr-2 font-bold'>Bitcoin</span>
            <span className='mr-2 text-[#A7B1C2]'>BTC</span>
            <span className='text-xs font-bold text-[#3C67F7] bg-[#E7F0FF] px-3 py-2 rounded-lg'>Buy</span>
          </td>
          <td className='h-16 font-bold text-right'>$40,435.62</td>
          <td className='h-16 font-semibold text-right text-[#EA3943]'>- 1.46%</td>
          <td className='h-16 font-semibold text-right text-[#16C784]'>+ 2.13%</td>
          <td className='h-16 font-bold text-right'>$768,904,009,242</td>
        </tr>
      </table>
    </div>
  )
}
