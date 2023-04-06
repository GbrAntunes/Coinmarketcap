import { useContext, useState } from 'react'

import { Favorites } from "../../components/Favorites";
import { PageHeader } from "../../components/PageHeader";
import { TopBar } from "../../components/TopBar";
import { TopCryptoTable } from "../../components/TopCryptosTable";
import Context from "../../context/context";

export function Home() {
  const [favorites] = useContext(Context)
  const [showHighlights, setShowHighlights] = useState(true)

  return (
    <>
      <TopBar />
      <PageHeader isHighlightsShown={showHighlights} toggleHighlights={setShowHighlights} />
      {(favorites && showHighlights) && <Favorites />}
      <TopCryptoTable />
    </>
  )
}
