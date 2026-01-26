import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {icon ? <div className="text-2xl text-amber-500">{icon}</div> : null}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </div>
  );
}
