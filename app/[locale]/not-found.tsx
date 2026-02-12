export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-display font-bold text-foreground/50">
        404
      </h1>
      <p className="mt-4 text-sm font-mono text-foreground/30 uppercase tracking-widest">
        Page not found
      </p>
    </section>
  );
}
