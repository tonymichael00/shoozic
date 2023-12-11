import Header from "@/components/Header";
import { ModeToggle } from "@/components/ui/toggle-mode";

export default function Home() {
  return (
    <main>
      <div
        className="h-full w-full overflow-hidden 
      overflow-y-auto rounded-lg bg-neutral-900"
      >
        <Header>Header</Header>

        {/* <ModeToggle /> */}
      </div>
    </main>
  );
}
