import Category from "@/components/musicSections/category";
import SearchModalWrapper from "@/components/search/searchModalWrapper";

export default function Home({ searchParams }: { searchParams?: { query?: string } }) {
  return (
    <main className="">
      <SearchModalWrapper query={searchParams?.query || ""} />
      <Category category="Daily Mixes" />
      <Category category="Recently" />
      <Category category="New Releases" />
      <Category category="Moods" />
      <Category category="For Ypu" />
    </main>
  );
}
