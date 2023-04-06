import { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import { formatCurrency } from '../../utils/formatCurrency'
import emptyStar from '../../assets/favorito.svg'
import filledStar from '../../assets/favorito_ativo.svg'
import Context from '../../context/context'

type CryptoParams = {
  id: string
  name: string
  symbol: string
  currentPrice: number
  lastDayDeviation: number
  lastWeekDeviation: number
  marketValue: number
}

type ApiCryptoParams = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  fully_diluted_valuation: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number
}

export function TopCryptoTable() {
  const [topCryptosList, setTopCryptosList] = useState<CryptoParams[]>([])
  const [favorites, setNewFavoriteCoin] = useContext(Context)

  function handleFavoriteClick(selectedCoinId: string) {
    setNewFavoriteCoin(selectedCoinId)
  }

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&price_change_percentage=24h%2C7d&locale=en')
      .then(function (response) {

        const mappedData = response.data.map((crypto: ApiCryptoParams) => ({
          id: crypto.id,
          name: crypto.name,
          symbol: crypto.symbol,
          currentPrice: crypto.current_price,
          lastDayDeviation: crypto.price_change_percentage_24h,
          marketValue: crypto.fully_diluted_valuation,
          lastWeekDeviation: crypto.price_change_percentage_7d_in_currency
        }));

        setTopCryptosList(mappedData)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <div className='flex-1 px-28 mb-10'>
      <table className='w-full'>
        <thead>
          <tr className='border-b border-[#A7B1C2] pb-4'>
            <th></th>
            <th className='text-center'>#</th>
            <th className='text-left'>Nome</th>
            <th className='text-right'>Preço</th>
            <th className='text-right'>24h %</th>
            <th className='text-right'>7d %</th>
            <th className='text-right'>Valor de mercado</th>
          </tr>
        </thead>
        <tbody>
          { topCryptosList && (
            topCryptosList.map((crypto, index) => (
              <tr className='border-b border-[#A7B1C2]' key={crypto.id}>
                <td onClick={() => handleFavoriteClick(crypto.id)}>
                  {
                    favorites.includes(crypto.id)
                      ? <img className='cursor-pointer' src={filledStar} alt="estrela preenchida" />
                      : <img className='cursor-pointer' src={emptyStar} alt="estrela vazia" />
                  }
                </td>
                <td>{ index+1 }</td>
                <td className='h-16 flex items-center'>
                  <span className='mr-2 bg-[#F7931A] w-5 h-5 rounded-xl inline-block'></span>
                  <span className='mr-2 font-bold'>{ crypto.name }</span>
                  <span className='mr-2 uppercase text-[#A7B1C2]'>{ crypto.symbol }</span>
                  <span className='text-xs font-bold text-[#3C67F7] bg-[#E7F0FF] px-3 py-2 rounded-lg'>Buy</span>
                </td>
                <td className='h-16 font-bold text-right'>{ formatCurrency(crypto.currentPrice) }</td>
                { crypto.lastDayDeviation >= 0
                  ? <td className='h-16 font-semibold text-right text-[#16C784]'> +{crypto.lastDayDeviation.toFixed(2)}% </td>
                  : <td className='h-16 font-semibold text-right text-[#EA3943]'> {crypto.lastDayDeviation.toFixed(2)}% </td>
                }
                { crypto.lastWeekDeviation >= 0
                  ? <td className='h-16 font-semibold text-right text-[#16C784]'>+ { crypto.lastWeekDeviation.toFixed(2) }%</td>
                  : <td className='h-16 font-semibold text-right text-[#EA3943]'>{ crypto.lastWeekDeviation.toFixed(2) }%</td>
                }
                <td className='h-16 font-bold text-right'>{ formatCurrency(crypto.marketValue) }</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
