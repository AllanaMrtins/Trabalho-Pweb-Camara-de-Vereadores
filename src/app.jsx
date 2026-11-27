import { useEffect, useMemo, useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { buscarJson } from './services/api';

const rotas = [
  ['/', 'Início'],
  ['/camara', 'A Câmara'],
  ['/vereadores', 'Vereadores'],
  ['/sessoes', 'Sessões'],
  ['/projetos', 'Projetos e leis'],
  ['/transparencia', 'Transparência'],
  ['/armazenamento', 'Armazenamento'],
  ['/contato', 'Contato'],
];

function useDadosJson(url) {
  const [estado, setEstado] = useState({
    dados: [],
    carregando: true,
    erro: '',
  });
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    const controlador = new AbortController();
    let ativo = true;
    buscarJson(url, controlador.signal)
      .then((dados) => {
        if (ativo) setEstado({ dados, carregando: false, erro: '' });
      })
      .catch((erro) => {
        if (ativo && erro.name !== 'AbortError') {
          setEstado({ dados: [], carregando: false, erro: erro.message });
        }
      });

    return () => {
      ativo = false;
      controlador.abort();
    };
  }, [url, tentativa]);

  return {
    ...estado,
    tentarNovamente: () => setTentativa((valor) => valor + 1),
  };
}

function Cabecalho() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header>
        <div className="container topo">
          <div className="marca">
            <div className="brasao" aria-hidden="true">
              CM
            </div>
            <div>
              <small>CÂMARA MUNICIPAL</small>
              <h1>Ipiranga do Piauí</h1>
              <p>Portal institucional</p>
            </div>
          </div>
        </div>
      </header>
      <nav aria-label="Navegação principal">
        <div className="container nav">
          {rotas.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => (isActive ? 'ativo' : '')}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

function Rodape() {
  return (
    <footer>
      <div className="container rodape">
        <div>
          <small>CÂMARA MUNICIPAL DE IPIRANGA DO PIAUÍ</small>
          <p>Programação para a Web 1 · Trabalho 03</p>
        </div>
        <p className="copyright">Projeto acadêmico demonstrativo</p>
      </div>
    </footer>
  );
}
function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main id="conteudo" className="route-view">
        {children}
      </main>
      <Rodape />
    </>
  );
}
function CabecalhoSecao({ tag, title, children }) {
  return (
    <section className="secao">
      <div className="container">
        <span className="tag">{tag}</span>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="tag">PODER LEGISLATIVO MUNICIPAL</span>
          <h2>Informação pública mais próxima do cidadão.</h2>
          <p>
            Consulte vereadores, sessões, projetos, leis e canais de
            participação da Câmara Municipal de Ipiranga do Piauí.
          </p>
          <div className="acoes">
            <button
              className="btn principal"
              onClick={() => navigate('/sessoes')}
            >
              Consultar sessões
            </button>
            <button
              className="btn claro"
              onClick={() => navigate('/vereadores')}
            >
              Conhecer vereadores
            </button>
          </div>
        </div>
        <div className="acesso">
          <h3>Acesso rápido</h3>
          <p>
            Navegue sem recarregar a página. Vereadores e sessões são carregados
            por requisições GET.
          </p>
        </div>
      </div>
    </section>
  );
}
function Inicio() {
  return (
    <>
      <Hero />
      <section className="secao">
        <div className="container">
          <span className="tag">PORTAL INSTITUCIONAL</span>
          <h2>Transparência e participação</h2>
          <div className="cards">
            <article>
              <div className="icone">01</div>
              <h3>Processo legislativo</h3>
              <p>Acompanhe projetos, leis e documentos da Câmara.</p>
            </article>
            <article>
              <div className="icone">02</div>
              <h3>Sessões públicas</h3>
              <p>Consulte datas, horários e locais das sessões.</p>
            </article>
            <article>
              <div className="icone">03</div>
              <h3>Participação popular</h3>
              <p>Entre em contato e acompanhe as ações do Legislativo.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
function Camara() {
  return (
    <CabecalhoSecao tag="INSTITUCIONAL" title="Sobre a Câmara">
      <div className="intro">
        <p>
          A Câmara Municipal de Ipiranga do Piauí é o espaço de representação
          dos cidadãos e de debate das políticas públicas municipais.
        </p>
        <p>
          Esta versão utiliza uma SPA com React, rotas no cliente, componentes
          reutilizáveis e comunicação assíncrona via Fetch API.
        </p>
      </div>
    </CabecalhoSecao>
  );
}
function MensagemDados({ carregando, erro, tentarNovamente }) {
  if (carregando) return <p role="status">Carregando dados...</p>;
  if (erro)
    return (
      <div className="mensagem-erro" role="alert">
        <p>{erro}</p>
        <button className="btn claro" onClick={tentarNovamente}>
          Tentar novamente
        </button>
      </div>
    );
  return null;
}
function Vereadores() {
  const { dados, carregando, erro, tentarNovamente } = useDadosJson(
    '/data/vereadores.json',
  );
  const [busca, setBusca] = useState(
    () => sessionStorage.getItem('pesquisaVereador') || '',
  );
  useEffect(() => {
    sessionStorage.setItem('pesquisaVereador', busca);
  }, [busca]);
  const filtrados = useMemo(
    () =>
      dados.filter((v) =>
        `${v.nome} ${v.partido}`.toLowerCase().includes(busca.toLowerCase()),
      ),
    [dados, busca],
  );
  return (
    <CabecalhoSecao tag="REPRESENTANTES" title="Vereadores">
      <MensagemDados
        carregando={carregando}
        erro={erro}
        tentarNovamente={tentarNovamente}
      />
      {!carregando && !erro && (
        <>
          <div className="busca-vereadores">
            <label htmlFor="buscarVereador">
              Pesquisar por nome ou partido
            </label>
            <input
              id="buscarVereador"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Digite sua busca"
            />
          </div>
          <p aria-live="polite">
            {filtrados.length} vereador(es) encontrado(s).
          </p>
          <div className="vereadores">
            {filtrados.map((v) => (
              <article key={v.nome}>
                <div className="avatar" aria-hidden="true">
                  {v.iniciais}
                </div>
                <h3>{v.nome}</h3>
                <p>{v.partido}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </CabecalhoSecao>
  );
}
function Sessoes() {
  const { dados, carregando, erro, tentarNovamente } =
    useDadosJson('/data/sessoes.json');
  return (
    <CabecalhoSecao tag="AGENDA LEGISLATIVA" title="Sessões">
      <MensagemDados
        carregando={carregando}
        erro={erro}
        tentarNovamente={tentarNovamente}
      />
      {!carregando && !erro && (
        <div className="tabela">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Horário</th>
                <th>Tipo</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((s) => (
                <tr key={`${s.data}-${s.horario}`}>
                  <td>{s.data}</td>
                  <td>{s.horario}</td>
                  <td>{s.tipo}</td>
                  <td>{s.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </CabecalhoSecao>
  );
}
function Projetos() {
  return (
    <CabecalhoSecao tag="DOCUMENTOS" title="Projetos, leis e documentos">
      <div className="docs">
        <a href="#projetos">Projetos de lei</a>
        <a href="#leis">Legislação municipal</a>
        <a href="#atas">Atas das sessões</a>
        <a href="#regimento">Regimento interno</a>
      </div>
    </CabecalhoSecao>
  );
}
function Transparencia() {
  return (
    <CabecalhoSecao tag="CONTROLE SOCIAL" title="Transparência">
      <div className="lista">
        <p>
          <a href="#portal">Portal da transparência</a> — receitas, despesas e
          contratos.
        </p>
        <p>
          <a href="#licitacoes">Licitações e contratos</a> — processos e
          resultados.
        </p>
        <p>
          <a href="#informacao">Acesso à informação</a> — solicite informações
          públicas.
        </p>
      </div>
    </CabecalhoSecao>
  );
}
function Armazenamento() {
  const [status, setStatus] = useState('');
  const resumo = () =>
    `Contato: ${localStorage.getItem('contatoNome') || 'não salvo'} · Pesquisa: ${sessionStorage.getItem('pesquisaVereador') || 'não salva'} · Cookie: ${document.cookie.includes('preferenciaCookies') ? 'definido' : 'não definido'}`;
  const consultar = () => setStatus(resumo());
  const definirCookie = (valor) => {
    document.cookie = `preferenciaCookies=${valor}; max-age=${60 * 60 * 24 * 30}; path=/`;
    consultar();
  };
  const limpar = () => {
    localStorage.removeItem('contatoNome');
    localStorage.removeItem('contatoEmail');
    sessionStorage.removeItem('pesquisaVereador');
    document.cookie = 'preferenciaCookies=; Max-Age=0; path=/';
    consultar();
  };
  return (
    <CabecalhoSecao tag="PRIVACIDADE" title="Armazenamento no navegador">
      <div className="row g-3">
        <div className="col-md-4">
          <div className="storage-card">
            <h3>localStorage</h3>
            <p>Preserva dados de contato entre visitas.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="storage-card">
            <h3>sessionStorage</h3>
            <p>Mantém a pesquisa durante a sessão da aba.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="storage-card">
            <h3>Cookies</h3>
            <p>Registra a preferência do usuário por 30 dias.</p>
          </div>
        </div>
      </div>
      <div className="acoes">
        <button className="btn claro" onClick={() => definirCookie('aceito')}>
          Aceitar cookies
        </button>
        <button className="btn claro" onClick={() => definirCookie('recusado')}>
          Recusar cookies
        </button>
        <button className="btn principal" onClick={consultar}>
          Consultar estado
        </button>
        <button className="btn claro" onClick={limpar}>
          Limpar dados salvos
        </button>
      </div>
      <p className="mt-4" aria-live="polite">
        {status || 'Clique em “Consultar estado” para verificar os dados.'}
      </p>
    </CabecalhoSecao>
  );
}
function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState(
    () => localStorage.getItem('contatoNome') || '',
  );
  const [email, setEmail] = useState(
    () => localStorage.getItem('contatoEmail') || '',
  );
  const enviar = (e) => {
    e.preventDefault();
    localStorage.setItem('contatoNome', nome);
    localStorage.setItem('contatoEmail', email);
    setEnviado(true);
  };
  return (
    <CabecalhoSecao tag="PARTICIPAÇÃO" title="Fale com a Câmara">
      <form className="formulario" onSubmit={enviar}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="assunto">Assunto</label>
        <input id="assunto" required />
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" required rows="5" />
        <button className="btn principal" type="submit">
          Enviar mensagem
        </button>
        {enviado && (
          <p className="mensagem-sucesso" role="status">
            Formulário validado e dados de contato salvos no navegador.
          </p>
        )}
      </form>
    </CabecalhoSecao>
  );
}
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/camara" element={<Camara />} />
        <Route path="/vereadores" element={<Vereadores />} />
        <Route path="/sessoes" element={<Sessoes />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/armazenamento" element={<Armazenamento />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
    </Layout>
  );
}

export default App;
