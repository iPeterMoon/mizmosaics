export default function SectionSeparator() {
  return (
    <div className="w-full py-4 md:py-6 flex items-center justify-center bg-zinc-50">
      <div className="flex items-center gap-4">
        <div className="w-16 md:w-24 h-0.5 bg-primarylight"></div>
        <div className="w-3 h-3 rotate-45 bg-primary"></div>
        <div className="w-16 md:w-24 h-0.5 bg-primarylight"></div>
      </div>
    </div>
  );
}