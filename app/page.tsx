import Category from "@/components/musicSections/category";
import ThemeSelector from "@/components/themeSelector";
import Image from "next/image";

export default function Home() {
  // useTheme()
  return (
    <div className="h-screen bg-secondary-light dark:bg-secondary-dark pl-6">
      <ThemeSelector />
      <Category category="Daily Mixes"/>
    </div>
  );
}
