import { useEffect, useRef, useState } from "react";
import vaultBoy from "../assets/vault-boy.gif";
import clickSound from '../assets/click-pip-boy.mp3';
import clickSound2 from '../assets/click-pip-boy-v2.mp3';
import clickSound3 from '../assets/click-pip-boy-v3.mp3';

interface SpecialItem {
  letter: string;
  title: string;
  items: string[];
}

const specialData: SpecialItem[] = [
  {
    letter: "S",
    title: "SKILLS",
    items: [
      "React & TypeScript - Nivel 5",
      "Node.js Backend - Nivel 5",
      "Electron.js - Nivel 2",
      "C# ASP.NET - Nivel 1",
      "SQL Database - Nivel 5",
      "NoSQL Database - Nivel 2",
      "Python - Nivel 3",
      "PHP - Nivel 3",
      "GitHub Actions - Nivel 2",
      "Azure DevOps - Nivel 1"
    ]
  },
  {
    letter: "P",
    title: "PROJECTS",
    items: [
      "D8 - Ideias de date",
      "Music Generations - Descubra sua geração pelo LastFM",
      "LOUD joga hoje?"
    ]
  },
  {
    letter: "E",
    title: "EXPERIENCE",
    items: [
      "Full Stack Developer - Grupo Akiyama (2025 - Presente)",
      "Engenheiro de Software Jr. - Plataforma Nobis (2022-2025)",
      "Estagiário de Desenvolvimento - PUCPR (2021-2022)",
      "Estagiário de TI - SEEC (2018-2019)"
    ]
  },
  {
    letter: "C",
    title: "CURSOS",
    items: [
      "Pós graduação em Computação Quantica - Unicuritiba (2025 - Cursando)",
      "Bacharelado em Engenharia de Software - PUCPR (2020 - 2025)",
      "Ensino Médio Tecnico em Informática - TECPUC (2016 - 2019)",
      "C# Básico - Linkedin Learning (2023)"
    ]
  },
  {
    letter: "I",
    title: "INTERESSES",
    items: [
      "Inteligencia Artificial & Machine Learning",
      "Computação Quântica",
      "Open Source Projects",
      "DevOps & Cloud Computing"
    ]
  },
  {
    letter: "A",
    title: "APTIDÕES",
    items: [
      "Resolução de problemas com lógica",
      "Liderança Tech",
      "Code Review",
      "Pensamento meticuloso"
    ]
  },
  {
    letter: "L",
    title: "LAURÉIS",
    items: [
      "Destaque de desempenho acadêmico - PUCPR - Engenharia de Software 2024",
      "Honra ao mérito de representante de turma - PUCPR - Engenharia de Software 2023",
      "Melhor Projeto acadêmico - PUCPR - Escola Politécnica 2022"
    ]
  }
];

export const SpecialSection = () => {
  const [selectedSpecial, setSelectedSpecial] = useState<number>(0);
  const [specialIndex, setSpecialIndex] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const allClickSounds = [clickSound, clickSound2, clickSound3];

  useEffect(() => {
    audioRef.current = new Audio(allClickSounds[specialIndex]);
  }, []);

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current = new Audio(allClickSounds[specialIndex]);
      // Garante que o som possa ser tocado repetidamente, mesmo que rápido
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  const handleSpecialClick = (index: number) => {
    const factor = Math.floor(Math.random() * allClickSounds.length);
    console.log(factor)
    setSpecialIndex(factor);
    playClickSound();
    setSelectedSpecial(index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="pipboy-border bg-card p-6 mb-8">
        <h2 className="text-3xl font-bold pipboy-glow text-center mb-2 uppercase tracking-widest">
          &gt;&gt; S.P.E.C.I.A.L. STATS &lt;&lt;
        </h2>
        <div className="text-center text-muted-foreground text-xs uppercase tracking-wider">
          [Status Analysis Complete]
        </div>
      </div>

      <div className="pipboy-border bg-card p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - SPECIAL buttons */}
          <div className="lg:col-span-1 space-y-2">
            {specialData.map((special, idx) => (
              <button
                key={special.letter}
                onClick={() => handleSpecialClick(idx)}
                className={`w-full text-left p-3 transition-all border-2 uppercase tracking-wider font-bold ${
                  selectedSpecial === idx
                    ? 'border-primary bg-primary/20 text-primary pipboy-glow'
                    : 'border-primary/30 bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground'
                }`}
              >
                <span className="text-2xl mr-3">{special.letter}</span>
                <span className="text-sm">{special.title}</span>
              </button>
            ))}
          </div>

          {/* Right side - Content display */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vault-boy image */}
            <div className="flex items-center justify-center">
              <img 
                src={vaultBoy} 
                alt="Vault-Boy" 
                className="w-48 h-48 object-contain pipboy-glow animate-pulse-glow"
              />
            </div>

            {/* Selected content */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold pipboy-glow uppercase tracking-wider border-b border-primary pb-2">
                {specialData[selectedSpecial].letter} - {specialData[selectedSpecial].title}
              </h3>
              <ul className="space-y-2">
                {specialData[selectedSpecial].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">›</span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
