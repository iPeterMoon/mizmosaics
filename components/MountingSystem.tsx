export default function MountingSystem() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider text-primary">
          Professional Installation & Logistics
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square bg-zinc-100 rounded-lg overflow-hidden flex items-center justify-center">
              <p className="text-zinc-400 text-sm">Mounting System Image</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-widest text-zinc-800">
                The Mounting System (No Mesh)
              </h3>
              <p className="text-base leading-relaxed text-zinc-600 tracking-wide">
                Face-mounted paper: Our mosaics use front-facing paper, not rear mesh.
              </p>
              <p className="text-base leading-relaxed text-zinc-600 tracking-wide">
                The benefit: Allows 100% direct contact between glass and mortar for a permanent structural bond. The paper is easily washed off after installation.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <div className="space-y-3">
                <h4 className="text-base font-semibold tracking-widest text-zinc-800">
                  Required Bonding Agent
                </h4>
                <p className="text-sm leading-relaxed text-zinc-600 tracking-wide">
                  Specification: Install only with a high-performance, polymer-modified thin-set mortar specifically rated for glass tile.
                </p>
                <p className="text-sm leading-relaxed text-zinc-600 tracking-wide">
                  Advisory: Do not use standard ceramic thin-set or mastics.
                </p>
              </div>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h4 className="text-base font-semibold tracking-widest text-zinc-800">
                How It Arrives
              </h4>
              <div className="space-y-2 mt-3">
                <p className="text-sm leading-relaxed text-zinc-600 tracking-wide">
                  Standard pieces: Delivered as single, ready-to-lay units.
                </p>
                <p className="text-sm leading-relaxed text-zinc-600 tracking-wide">
                  Large custom projects: Delivered segmented into numbered, manageable sheets with a clear assembly map for easy on-site installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}