import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { TopBar } from '../../components/TopBar'

import borderEmptyStar from '../../assets/favoritar.svg'
import { formatCurrency } from '../../utils/formatCurrency'

type CoinParams = {
  id: string
  symbol: string
  name: string
  rank: number
  usdPrice: number
  lastDayDeviation: number
  btcPrice: number
  ethPrice: number
  btcChange: number
  ethChange: number
  forks: number
  stars: number
  subscribers: number
}

export function CryptoDetails() {
  const { id: coinId } = useParams()
  const [coin, setCoin] = useState<CoinParams>({
    id: '',
    symbol: '',
    name: '',
    rank: 0,
    usdPrice: 0,
    lastDayDeviation: 0,
    btcPrice: 0,
    ethPrice: 0,
    forks: 0,
    stars: 0,
    subscribers: 0,
    btcChange: 0,
    ethChange: 0,
  })

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
    .then(function (response) {
      const {
        id,
        symbol,
        name,
        coingecko_rank,
        market_data: {
          current_price: { usd, btc, eth },
          price_change_percentage_24h,
          price_change_24h_in_currency: {
            btc: btcChange, eth: ethChange
          }
        },
        developer_data: { forks, stars, subscribers },
      } = response.data;

      setCoin({
        id,
        symbol,
        name,
        rank: coingecko_rank,
        usdPrice: usd,
        lastDayDeviation: price_change_percentage_24h,
        btcPrice: btc,
        ethPrice: eth,
        forks,
        stars,
        subscribers,
        btcChange,
        ethChange,
      })

    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  return (
    <>
      <TopBar />
      <div className='px-28'>
        <div className='py-14 font-semibold text-[#A7B1C2]'>
          Criptomoedas {'>'} Moedas {'>'} <strong className='font-bold text-black'>{coin.name}</strong>
        </div>

        <div className='flex justify-between mb-16'>
          <div>
            <div className='flex items-center mb-3'>
              <span className='mr-2 bg-[#F7931A] w-5 h-5 rounded-xl inline-block'></span>
              <h1 className='text-4xl font-bold mx-3'>{coin.name}</h1>
              <span className='bg-[#EFF2F5] text-[#A7B1C2] rounded-lg text-xs px-3 py-2'>{coin.symbol}</span>
              <img src={borderEmptyStar} className='ml-3' alt="estrela vazia" />
            </div>
            <span className='p-2 bg-[#80899C] text-white rounded-lg'>
              Classificação #{coin.rank}
            </span>
          </div>

          <div className='flex flex-col'>
            <div className='text-[#A7B1C2] font-semibold'>Preço de {coin.name}
              (<span className='uppercase'>{coin.symbol}</span>)
            </div>
            <div className='flex flex-row items-center mb-3'>
              <h1 className='font-bold text-5xl mr-3'>{formatCurrency(coin.usdPrice)}</h1>
              <span className={`${coin.lastDayDeviation >= 0 ? 'bg-[#16C784]' : 'bg-[#EA3943]'} rounded-lg text-white px-3 py-2`}>
                {coin.lastDayDeviation > 0 ? '▲' : '▼'} {coin.lastDayDeviation.toFixed(2)}%
              </span>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div className='text-[#A7B1C2]'>
                {coin.btcPrice.toFixed(8)} BTC
              </div>
              <div className='font-semibold text-[#16C784]'>
                ▲ {coin.btcChange.toFixed(2)}%
              </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div className='text-[#A7B1C2]'>
                {coin.ethPrice.toFixed(8)} ETH
              </div>
              <div className={`font-semibold ${coin.ethChange >= 0 ? 'text-[##16C784]' : 'text-[#EA3943]' }`}>
                 {coin.ethChange >= 0 ? `▲ ${coin.ethChange.toFixed(2)}%` : `▼ ${coin.ethChange.toFixed(2)}%`}
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-around'>
          <div className='p-6 bg-white border border-[#E5E5E5] rounded-lg w-80'>
            <p className='text-[#A7B1C2] font-semibold'>Github Followers</p>
            <p className='text-[#1E3146] font-bold text-4xl'>
              {coin.subscribers}
            </p>
          </div>
          <div className='p-6 bg-white border border-[#E5E5E5] rounded-lg w-80'>
            <p className='text-[#A7B1C2] font-semibold'>Github Stars</p>
            <p className='text-[#1E3146] font-bold text-4xl'>
              {coin.stars}
            </p>
          </div>
          <div className='p-6 bg-white border border-[#E5E5E5] rounded-lg w-80'>
            <p className='text-[#A7B1C2] font-semibold'>Github Forks</p>
            <p className='text-[#1E3146] font-bold text-4xl'>
              {coin.forks}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
