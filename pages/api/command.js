export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Documentações",
      description: "Documentações pessoal",
      link: "https://pt.dnys.dev",
    },
    {
      id: 2,
      name: "DNYS RUN",
      description: "Script de instalações",
      link: "https://run.dnys.dev",
    },
    {
      id: 3,
      name: "Teste Proz Educação",
      description: "Sistema de notificação",
      link: "https://teste-proz.daviny.dev/",
    },
    {
      id: 4,
      name: "Teste Proz Educação",
      description: "Sistema de notificação",
      link: "https://teste-proz.daviny.dev/",
    },
    {
      id: 5,
      name: "DNYS RUN",
      description: "Script de instalações",
      link: "https://run.dnys.dev",
    },
]);
}