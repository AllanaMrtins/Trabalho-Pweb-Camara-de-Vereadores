export const vereadores = [
  ['Antonio Ribeiro', 'PT', 'AR'],
  ['Edivaldo Fontes', 'PT', 'EF'],
  ['Francisco Márcio', 'MDB', 'FM'],
  ['Henrique Leal', 'PT', 'HL'],
  ['Jofran Lopes', 'PT', 'JL'],
  ['Paulo Cortez', 'MDB', 'PC'],
  ['Peterson Barbosa', 'PSD', 'PB'],
  ['João Olimpio', 'MDB', 'JO'],
  ['Tiago Leal', 'PSD', 'TL'],
].map(([nome, partido, iniciais]) => ({ nome, partido, iniciais }));

export const sessoes = [
  { data: '21/09/2026', horario: '19:30h', tipo: 'Ordinária', local: 'Edifício Vereador Luis Ramos' },
  { data: '28/09/2026', horario: '19:30h', tipo: 'Ordinária', local: 'Edifício Vereador Luis Ramos' },
  { data: '05/10/2026', horario: '19:30h', tipo: 'Ordinária', local: 'Edifício Vereador Luis Ramos' },
];
