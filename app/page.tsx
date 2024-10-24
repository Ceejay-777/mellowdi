import Category from "@/components/musicSections/category";
import SearchModalWrapper from "@/components/search/searchModalWrapper";
import { Suspense } from "react";

export default function Home({ searchParams }: { searchParams?: { query?: string } }) {
  return (
    <main className="relative">
      <Suspense fallback={<div className="skeleton w-48 h-12"></div>}>
        <SearchModalWrapper query={searchParams?.query || ""} />
      </Suspense>

      <Category category="Daily Mixes" />
      <Category category="Recently" />
      <Category category="New Releases" />
      <Category category="Moods" />
      <Category category="For Ypu" />
    </main>
  );
}
