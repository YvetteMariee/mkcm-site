import Image from "next/image";

export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-transparent" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">MKCM</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base text-white/80">{subtitle}</p>
        </div>
        <Image
          src="/illustrations/services-hero.svg"
          alt="Illustration consulting IT"
          width={520}
          height={380}
          className="mx-auto w-full max-w-md"
        />
      </div>
    </section>
  );
}
