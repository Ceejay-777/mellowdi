import Shelf from "@/components/musicSections/shelf";
import SearchModalWrapper from "@/components/search/searchModalWrapper";

export default function Home({ searchParams }: { searchParams?: { query?: string } }) {
  return (
    <main className="">
      <SearchModalWrapper query={searchParams?.query || ""} />
      <Shelf shelf="Daily Mixes" />
      <Shelf shelf="Recently" />
      <Shelf shelf="New Releases" />
      <Shelf shelf="Moods" />
      <Shelf shelf="For Ypu" />
    </main>
  );
}
