import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "HubML - Soluções para o Mercado Livre com IA" },
    {
      name: "description",
      content:
        "Utilizamos a inteligência artificial para facilitOtimize sua gestão no Meli com inteligência artificial. Nossa solução automatiza tarefas, economiza seu tempo e permite que você foque no que realmente importa: o crescimento do seu negócio. Agilidade, precisão e eficiência em um só lugar.",
    },
  ];
};

export default function Index() {
  return <div className="flex h-screen items-center justify-center">Home</div>;
}
