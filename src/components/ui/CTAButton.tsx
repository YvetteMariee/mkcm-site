import Link from "next/link";

type CTAButtonProps = {
  href: string;
  label: string;
};

export default function CTAButton({ href, label }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      {label}
    </Link>
  );
}
