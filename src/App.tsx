import { Play } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 sm:gap-1 px-0.5 sm:px-1 py-1">
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
    </div>
  );
}
