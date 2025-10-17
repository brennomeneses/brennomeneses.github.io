import { Github, Linkedin } from "lucide-react";

export const SocialLinks = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="pipboy-border bg-card p-6">
        <h2 className="text-2xl font-bold pipboy-glow text-center mb-6 uppercase tracking-widest">
          &gt;&gt; SOCIAL LINKS &lt;&lt;
        </h2>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/brennoaraujom"
            target="_blank"
            rel="noopener noreferrer"
            className="pipboy-border bg-card p-6 hover:bg-primary/20 transition-all group"
          >
            <Linkedin className="w-12 h-12 text-primary group-hover:scale-110 transition-transform pipboy-glow" />
            <p className="text-xs uppercase tracking-wider mt-2 text-center">LinkedIn</p>
          </a>
          <a
            href="https://github.com/brennomeneses/"
            target="_blank"
            rel="noopener noreferrer"
            className="pipboy-border bg-card p-6 hover:bg-primary/20 transition-all group"
          >
            <Github className="w-12 h-12 text-primary group-hover:scale-110 transition-transform pipboy-glow" />
            <p className="text-xs uppercase tracking-wider mt-2 text-center">GitHub</p>
          </a>
        </div>
      </div>
    </section>
  );
};
