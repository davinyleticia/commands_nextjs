export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "Documentações",
      description: "Documentações pessoal",
      language: "git",
      link: "https://pt.dnys.dev",
    },
    {
      id: 2,
      name: "DNYS RUN",
      description: "Script de instalações",
      language: "git",
      link: "https://run.dnys.dev",
    },
    {
      id: 3,
      name: "Teste Proz Educação",
      description: "Sistema de notificação",
      language: "git",
      link: "https://teste-proz.daviny.dev/",
    },
    {
      id: 4,
      name: "Teste Proz Educação",
      description: "Sistema de notificação",
      language: "git",
      link: "https://teste-proz.daviny.dev/",
    },
    {
      id: 5,
      name: "DNYS RUN",
      description: "Script de instalações",
      language: "git",
      link: "https://run.dnys.dev",
    },
]);
}