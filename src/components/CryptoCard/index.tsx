import { useState, useEffect } from 'react'
import axios from 'axios'

import filledStar from '../../assets/favorito_ativo.svg'
import { formatCurrency } from '../../utils/formatCurrency'

type CryptoCardProps = {
  id: string
}

type Crypto = {
  rank: number
  symbol: string
  price: number
  lastDayDeviation: number
}

export function CryptoCard({ id }: CryptoCardProps) {
  const [coin, setCoin] = useState<Crypto>({
    rank: 0,
    symbol: 'UND',
    price: 0,
    lastDayDeviation: 0
  })

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(function ({ data: response }) {
        setCoin({
          rank: response.market_cap_rank,
          symbol: response.symbol,
          price: response.market_data.current_price.usd,
          lastDayDeviation: response.market_data.price_change_percentage_24h
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [id])

  return (
    <li className='flex border bg-white border-slate-300 rounded-lg px-6 py-4 mr-6'>
      <div className='flex items-center text-4xl font-bold mr-3'>
        {coin.rank}
        <img src={filledStar} alt="estrela preenchida" />
      </div>

      <div className='whitespace-nowrap'>
        <div className='flex items-center'>
          <h1 className='font-mono font-bold text-2xl uppercase'>{coin.symbol}</h1>
          {coin.lastDayDeviation >= 0
            ? <span className='text-[#16C784]'>▲</span>
            : <span className='text-[#EA3943]'>▼</span>
          }
        </div>
        <p className='text-[#A7B1C2]'>
          {formatCurrency(coin.price)}
        </p>
        {coin.lastDayDeviation >= 0
          ? <p className='text-[#16C784]'>+{coin.lastDayDeviation.toFixed(2)}%</p>
          : <p className='text-[#EA3943]'>{coin.lastDayDeviation.toFixed(2)}%</p>
        }

      </div>
    </li>
  )
}
