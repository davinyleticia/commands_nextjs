export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "git add",
      description: "Adiciona o monitoramento dos arquivos, com um ponto no final significa todos",
      language: "git",
      link: "https://pt.dnys.dev",
    },
    {
      id: 2,
      name: "git -m commit",
      description: "Comentar um commit, usando -m serve para escrever em única linha",
      language: "git",
      link: "https://run.dnys.dev",
    },
    {
      id: 3,
      name: "git push",
      description: "subir o commit",
      language: "git",
      link: "https://teste-proz.daviny.dev/",
    },
]);
}