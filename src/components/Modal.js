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
       <br></br>
       <br></br>
        <p className="modal-description">
          <strong>PROJET:&nbsp;&nbsp;&nbsp;</strong> {project?.Projet || "Pas de description disponible"}
        </p>
        <p><strong>DESCRIPTION:&nbsp;&nbsp;&nbsp;</strong> {project?.Description || "Non spécifié"}</p>
        <p><strong>CONTEXTE DU PROJET:&nbsp;&nbsp;&nbsp;</strong> {project?.Contexte || "Non spécifié"}</p>
        <p><strong>ARCHITECTURES ET TECHNOLOGIES UTILISEES:&nbsp;&nbsp;&nbsp;</strong> {project?.Architecture || "Non spécifié"}</p>
        <p><strong>IMPLEMENTATION DES FONCTIONALITES CLES:&nbsp;&nbsp;&nbsp;</strong> {project?.Implementation || "Non spécifié"}</p>
        <p><strong>CHALLENGES ET SOLUTIONS:&nbsp;&nbsp;&nbsp;</strong> {project?.Challenges || "Non spécifié"}</p>
        <p><strong>DEFIS TECHNIQUES ET APPROCHES STRATEGIQUES:&nbsp;&nbsp;&nbsp;</strong> {project?.Défis || "Non spécifié"}</p>
        <p><strong>DEPLOIEMENT ET TESTS:&nbsp;&nbsp;&nbsp;</strong> {project?.Déploiement || "Non spécifié"}</p>
        <p><strong>LIEN:&nbsp;&nbsp;&nbsp;</strong> {project?.Lien || "Non spécifié"}</p>
        <a href={project.link} className="modal-link" target="_blank" rel="noopener noreferrer">
          Voir le lien
        </a>
      </div>
    </div>
  );
};

export default Modal;