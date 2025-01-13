import { Button } from "@/components/ui/button";
import { ArrowRightCircleIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-12 items-center justify-center">
      <h1 className="text-neutral-200">Drag & Drop Trial</h1>

      <section className="flex flex-col gap-6">
        <LinkButton path="kanban-board">Kanban Board</LinkButton>
        <LinkButton path="sortable-list">Sortable List</LinkButton>
      </section>
    </main>
  );
}

interface LinkButtonProps {
  path: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ path, children }) => {
  return (
    <div className="flex items-center gap-4">
      <ArrowRightCircleIcon className="h-8 w-8 text-neutral-400" />

      <Link href={`/${path}`} target="_blank">
        <Button variant="outline">{children}</Button>
      </Link>
    </div>
  );
};
