import { Favorites } from "../../components/Favorites";
import { PageHeader } from "../../components/PageHeader";
import { TopBar } from "../../components/TopBar";
import { TopCryptoTable } from "../../components/TopCryptosTable";

export function Home() {
  return (
    <>
      <TopBar />
      <PageHeader />
      <Favorites />
      <TopCryptoTable />
    </>
  )
}
