import React from "react";

const Modal = ({ isOpen, onClose, project }) => {
  console.log("📌 Modal.js - isOpen:", isOpen, "project:", project);
  console.log("📌 Description reçue :", project ? project.description : "Aucune description");

  if (!isOpen) return null; // Ne pas afficher la modale si elle est fermée

  return (
    <div className={`modal-overlay ${isOpen ? "fade-in" : "fade-out"}`} onClick={onClose}>
      <div className={`modal-content ${isOpen ? "fade-in" : "fade-out"}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={project.img} alt="Project" className="modal-image" />
        <p className="modal-description">
          <strong>Description:</strong> {project?.description || "Pas de description disponible"}
        </p>
        <p><strong>Contexte:</strong> {project?.Contexte || "Non spécifié"}</p>
        <p><strong>Architecture:</strong> {project?.Architecture || "Non spécifié"}</p>
        <p><strong>Implementation:</strong> {project?.Implementation || "Non spécifié"}</p>
        <p><strong>Challenges:</strong> {project?.Challenges || "Non spécifié"}</p>
        <p><strong>Défis:</strong> {project?.Défis || "Non spécifié"}</p>
        <p><strong>Déploiement:</strong> {project?.Déploiement || "Non spécifié"}</p>
        <a href={project.link} className="modal-link" target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      </div>
    </div>
  );
};

export default Modal;