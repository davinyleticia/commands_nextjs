export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "cd",
      description: "Server para abrir pasta",
      language: "bashBasico",
      link: "https://pt.dnys.dev",
    },
    {
      id: 2,
      name: "ls",
      description: "Listar todos arquivos",
      language: "bashBasico",
      link: "https://run.dnys.dev",
    },
    {
      id: 3,
      name: "mkdir",
      description: "criar pasta",
      language: "bashBasico",
      link: "https://teste-proz.daviny.dev/",
    },
    {
      id: 4,
      name: "chmod",
      description: "Permições",
      language: "bashBasico",
      link: "https://teste-proz.daviny.dev/",
    },
    {
      id: 5,
      name: "top",
      description: "mostra todos processos e o tamanho de uso de memória",
      language: "bashBasico",
      link: "https://run.dnys.dev",
    },
]);
}