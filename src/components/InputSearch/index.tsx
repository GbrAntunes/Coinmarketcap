import { useState, useEffect } from 'react'
import axios from 'axios'

import search from '../../assets/icone_busca.svg'
import { useDebounce } from '../../hooks/useDebounce'
import { Link } from 'react-router-dom'

type CryptoType = {
  id: string
  name: string
}

export function InputSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [coinSearchList, setCoinSearchList] = useState<CryptoType[]>([])
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const debouncedChange = useDebounce(() => setDebouncedSearch(searchTerm), 500)

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/search/?query=${debouncedSearch}`)
      .then(function (response) {
        setCoinSearchList(response.data.coins)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [debouncedSearch])

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
    debouncedChange(event.target.value)
  }

  return (
    <div className='flex bg-[#EFF2F5] relative rounded-lg h-10 items-center px-2 w-fit border-2 border-transparent focus-within:border-black'>
      <img src={search} className='mr-2' alt="lupa de busca" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Buscar'
        className='bg-transparent w-32 outline-none'
      />
      { (searchTerm && coinSearchList) && (
        <ul className='absolute top-10 px-2 py-3 bg-white border border-[#A7B1C2] rounded-lg max-h-80 overflow-y-auto'>
          {coinSearchList.map((coinSugestion) => (

            <Link to={`/crypto/${coinSugestion.id}`}>
              <li key={coinSugestion.id}>
                {coinSugestion.name}
              </li>
            </Link>

          ))}
        </ul>
      )}
      <span className='rounded-lg bg-[#A7B1C2] px-2 justify-center items-center text-white'>
        /
      </span>
    </div>
  )
}
