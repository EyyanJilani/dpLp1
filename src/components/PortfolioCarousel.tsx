import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects, Project } from "../data";

export default function PortfolioCarousel() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="bg-black py-20 lg:py-28 border-b border-red-900/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-red-500 uppercase font-mono">Case Studies</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Our ecommerce projects
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-2xl">
            A selection of our custom builds, migrations, and complex ecommerce architectures built for leading Australian brands.
          </p>
        </div>

        {/* Grid Container */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 border border-red-600/50 rounded-sm overflow-hidden shadow-lg group hover:shadow-2xl hover:border-red-500 transition-all duration-300 hover:scale-105"
            >
              {/* Image with overlay logo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-red-900/20 to-transparent" />

                {/* Client Logo Overlay */}
                <div className="absolute top-4 left-4 bg-red-600/95 backdrop-blur-sm px-3 py-1 rounded-sm border border-red-400/50 text-[11px] font-bold tracking-widest text-white uppercase font-mono shadow-md">
                  {project.logoText}
                </div>

                {/* Arrow up-right */}
                <button
                  type="button"
                  onClick={() => openModal(project)}
                  className="absolute bottom-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-red-600 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-red-700"
                  aria-label={`View ${project.name} image modal`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>

              {/* Text details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-display">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed min-h-[60px]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-red-600/30">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tag === "More +"
                        ? "bg-red-600 text-white font-semibold border border-red-500 hover:bg-red-700 animate-pulse"
                        : "bg-zinc-800 text-white border border-red-600/30"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6">
          <div className="relative w-full max-w-6xl max-h-[calc(100vh-2rem)] rounded-[36px] overflow-auto border border-red-700/50 shadow-[0_40px_120px_rgba(0,0,0,0.65)] bg-zinc-950">
            <button
              onClick={closeModal}
              className="absolute right-5 top-5 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition hover:bg-red-500"
              aria-label="Close gallery"
            >
              ×
            </button>

            <div className="flex h-full flex-col overflow-hidden">
              <div className="relative h-[50vh] sm:h-[54vh] bg-black">
                <img
                  src={selectedProject.modalImages[0]}
                  alt={`${selectedProject.name} image 1`}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                <div className="absolute left-6 bottom-6 rounded-[28px] border border-white/10 bg-black/75 px-6 py-6 text-white shadow-2xl sm:max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.45em] text-red-400 font-semibold">{selectedProject.logoText}</p>
                  <h3 className="mt-3 text-4xl font-bold text-white sm:text-5xl">{selectedProject.name}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">{selectedProject.description}</p>
                </div>
              </div>

              <div className="overflow-y-auto bg-zinc-950 p-6">
                {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {selectedProject.modalImages.map((image, index) => (
                    <div key={image} className="overflow-hidden rounded-[28px] border border-red-700/30 bg-zinc-900 shadow-sm">
                      <img
                        src={image}
                        alt={`${selectedProject.name} image ${index + 1}`}
                        className="h-32 w-full object-cover transition duration-300 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div> */}

                {/* <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-[28px] border border-red-700/30 bg-zinc-900 p-5 text-sm text-zinc-300">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-red-400">Focus</p>
                    <p className="mt-3 leading-6">Image-first case studies with one clean overlay and concise project detail.</p>
                  </div>
                  <div className="rounded-[28px] border border-red-700/30 bg-zinc-900 p-5 text-sm text-zinc-300">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-red-400">Use</p>
                    <p className="mt-3 leading-6">Scroll to explore more thumbnails and project details inside the same modal.</p>
                  </div>
                  <div className="rounded-[28px] border border-red-700/30 bg-zinc-900 p-5 text-sm text-zinc-300">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-red-400">Gallery</p>
                    <p className="mt-3 leading-6">The focus stays on visuals with minimal distractions around the overlay.</p>
                  </div>
                </div> */}
                <div className="space-y-8">
                  {selectedProject.modalImages.map((image, index) => {
                    const imageLeft = index % 2 === 0;
                    return (
                      <div
                        key={image}
                        className={`grid gap-6 rounded-[28px] border border-red-700/30 bg-zinc-900  overflow-hidden shadow-sm ${imageLeft ? "lg:grid-cols-[1.6fr_1.4fr]" : "lg:grid-cols-[1.4fr_1.6fr]"}`}
                      >
                        <div className={`${imageLeft ? "order-1" : "order-2"}`}>
                          <img
                            src={image}
                            alt={`${selectedProject.name} image ${index + 1}`}
                            className="h-72 w-full object-cover object-center transition duration-300 hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className={`${imageLeft ? "order-2" : "order-1"} flex flex-col justify-center gap-4 p-4 text-sm text-zinc-300`}>
                          <p className="text-xs uppercase tracking-[0.35em] text-red-400">Project insight {index + 1}</p>
                          <h4 className="text-lg font-semibold text-white">{index % 2 === 0 ? "Visual direction & concept" : "Customer experience & impact"}</h4>
                          <p className="leading-7 text-zinc-300">
                            {index % 2 === 0
                              ? "Showcase the design focus and premium presentation of your ecommerce solution in a striking case study format."
                              : "Highlight the outcomes and conversion-led improvements with a clean, editorial-style content card."
                            }
                          </p>
                          <ul className="space-y-2 text-sm text-zinc-400">
                            <li className="flex items-start gap-2">
                              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                              <span>{index % 2 === 0 ? "High-impact hero imagery." : "Performance data and conversion metrics."}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                              <span>{index % 2 === 0 ? "Bold product positioning." : "User-first checkout clarity."}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
