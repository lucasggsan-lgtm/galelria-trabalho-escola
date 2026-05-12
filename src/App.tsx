import { ArrowDown, Play } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: "Pesquisa de Campo",
    title: "Mapeamento Topográfico",
    description: "Análise in loco das condições e do relevo ambiental.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    type: 'image'
  },
  {
    id: 2,
    category: "Pesquisa de Campo",
    title: "Entrevistas Locais",
    description: "Pesquisa qualitativa e imersão com a comunidade.",
    imageUrl: "https://images.unsplash.com/photo-1555529771-835f59bfc50c?auto=format&fit=crop&q=80&w=1000",
    type: 'image'
  },
  {
    id: 3,
    category: "Análise de Dados",
    title: "Triagem Laboratorial",
    description: "Processamento e catalogação primária dos espécimes físicos.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000",
    type: 'image'
  },
  {
    id: 4,
    category: "Análise de Dados",
    title: "Modelagem Estatística",
    description: "Definição matemática dos padrões de correlação encontrados.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    type: 'image'
  },
  {
    id: 5,
    category: "Resultados",
    title: "Síntese dos Achados",
    description: "Apresentação dos dados compilados em fórum aberto.",
    imageUrl: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=1000",
    type: 'image'
  },
  {
    id: 6,
    category: "Resultados",
    title: "Impacto no Estudo",
    description: "Registro dinâmico sobre todo o processo (Documentário).",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000",
    type: 'video'
  }
];

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 md:px-10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-black text-lg">U</div>
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-slate-800 hidden sm:block">Academia Digital</span>
        </div>
        <div className="flex gap-6 md:gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-slate-900 border-b-2 border-slate-900 pb-1 w-max">Início</a>
          <a href="#galeria" className="hover:text-slate-900 w-max">Galeria</a>
        </div>
      </nav>

      {/* Hero / Header */}
      <header className="relative bg-slate-900 text-white flex-shrink-0 flex items-center px-6 md:px-12 py-24 md:py-32 min-h-screen md:min-h-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-800 flex items-center justify-center opacity-20 pointer-events-none hidden md:flex">
          <span className="text-[300px] font-black leading-none transform translate-x-20">24</span>
        </div>
        <div className="max-w-3xl z-10 mx-auto md:mx-0 w-full">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-4 h-px bg-blue-500"></span>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">
              Apresentação Acadêmica
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light leading-[1.1] mb-6 tracking-tight">
            Análise Estrutural e <br className="hidden md:block"/><span className="font-bold italic">Impacto Ambiental</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-8 border-l-2 border-slate-700 pl-6">
            Uma abordagem multidisciplinar sobre os efeitos da transformação urbana em ecossistemas locais. Explorando dados, metodologias e resultados com rigor científico e precisão analítica.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="#galeria" 
              className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors"
            >
              Ver Galeria
              <ArrowDown size={14} className="ml-2" />
            </a>
            <span className="text-xs text-slate-500 font-medium tracking-wide italic hidden sm:inline-block">Duração do projeto: 12 meses</span>
          </div>
        </div>
      </header>

      {/* Galeria */}
      <section id="galeria" className="bg-white py-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 sm:gap-1 px-0.5 sm:px-1">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-slate-200 aspect-square cursor-pointer overflow-hidden"
            >
              {/* Imagem */}
              <div 
                className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-500 bg-cover bg-center" 
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              ></div>
              
              {/* Indicador de Vídeo simples (estilo celular) */}
              {item.type === 'video' && (
                <div className="absolute top-2 right-2 drop-shadow-md">
                  <Play fill="currentColor" className="text-white w-5 h-5 opacity-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-10 flex items-center justify-between mt-auto flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-slate-900 flex items-center justify-center text-white font-black text-xs">U</div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-800">Academia Digital</span>
        </div>
        <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">© {new Date().getFullYear()} PROJETO ACADÊMICO</p>
      </footer>
    </div>
  );
}
