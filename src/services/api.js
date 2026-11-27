export async function buscarJson(url, signal) {
  const resposta = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    signal,
  });

  if (!resposta.ok) {
    throw new Error(`Não foi possível carregar os dados (${resposta.status}).`);
  }

  return resposta.json();
}
