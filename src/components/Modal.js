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
        <p></p>
        <p className="modal-description">
          <strong>PROJET:</strong> {project?.Projet || "Pas de description disponible"}
        </p>
        <p></p>
        <p><strong>DESCRIPTION:</strong> {project?.Description || "Non spécifié"}</p>
        <p><strong>CONTEXTE DU PROJET:</strong> {project?.Contexte || "Non spécifié"}</p>
        <p><strong>ARCHITECTURES ET TECHNOLOGIES UTILISEES:</strong> {project?.Architecture || "Non spécifié"}</p>
        <p><strong>IMPLEMENTATION DES FONCTIONALITES CLES:</strong> {project?.Implementation || "Non spécifié"}</p>
        <p><strong>CHALLENGES ET SOLUTIONS:</strong> {project?.Challenges || "Non spécifié"}</p>
        <p><strong>DEFIS TECHNIQUES ET APPROCHES STRATEGIQUES:</strong> {project?.Défis || "Non spécifié"}</p>
        <p><strong>DEPLOIEMENT ET TESTS:</strong> {project?.Déploiement || "Non spécifié"}</p>
        <a href={project.link} className="modal-link" target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      </div>
    </div>
  );
};

export default Modal;