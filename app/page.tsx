import Category from "@/components/musicSections/category";

export default function Home() {
  // useTheme()
  return (
    <>
      <Category category="Daily Mixes" />
      <Category category="Recently" />
      <Category category="New Releases" />
      <Category category="Moods" />
      <Category category="For Ypu" />
    </>
  );
}
