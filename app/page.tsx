import Category from "@/components/musicSections/category";
import Welcome from "@/components/welcome";

export default function Home() {
  // useTheme()
  return (
    <>
      <Welcome />
      <Category category="Daily Mixes" />
      <Category category="Recently" />
      <Category category="Daily Mixes" />
      <Category category="Daily Mixes" />
    </>
  );
}
