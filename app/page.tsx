import Category from "@/components/musicSections/category";
import SearchModalWrapper from "@/components/search/searchModalWrapper";
import { useSearchContext } from "@/context/searchContext";

export default function Home({ searchParams }: { searchParams?: { query?: string } }) {
  const { searchActive } = useSearchContext()
  return (
    <main className="relative">
      <SearchModalWrapper query={searchParams?.query || ""} searchActive={searchActive} />
      <Category category="Daily Mixes" />
      <Category category="Recently" />
      <Category category="New Releases" />
      <Category category="Moods" />
      <Category category="For Ypu" />
    </main>
  );
}
