export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        title: "Lançamento",
        date: '01/06/2023',
        description: "lançamento do command.views.page.",
        link: "https://pt.dnys.dev",
      },
      {
        id: 2,
        title: "Novos Comandos",
        date: '01/06/2023',
        description: "Adicionamos novos comando novas em bash",
        link: "https://pt.dnys.dev",
      },

  ]);
  }