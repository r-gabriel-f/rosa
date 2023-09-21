import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "../components/Girasol.css";
import musica from "../assets/musica.mp3";
export const Girasol = () => {
  return (
    <>
      <div>
        <ReactAudioPlayer src={musica} autoPlay loop />
      </div>
      <div className="sunflower">
        <div className="flower_wrapper">
          <div className="flower_stem"></div>
          <div className="flower_center"></div>
          <div className="flower_petal flower_petal-1"></div>
          <div className="flower_petal flower_petal-2"></div>
          <div className="flower_petal flower_petal-3"></div>
          <div className="flower_petal flower_petal-4"></div>
          <div className="flower_petal flower_petal-5"></div>
          <div className="flower_petal flower_petal-6"></div>
          <div className="flower_petal flower_petal-7"></div>
          <div className="flower_petal flower_petal-8"></div>
          <div className="flower_petal flower_petal-9"></div>
          <div className="flower_petal flower_petal-10"></div>
          <div className="flower_petal flower_petal-11"></div>
          <div className="flower_petal flower_petal-12"></div>

          <div className="flower_leaf flower_leaf-1"></div>
          <div className="flower_leaf flower_leaf-2"></div>

          <div className="flower_light flower_light-1"></div>
          <div className="flower_light flower_light-2"></div>
          <div className="flower_light flower_light-3"></div>
          <div className="flower_light flower_light-4"></div>
          <div className="flower_light flower_light-5"></div>
          <div className="flower_light flower_light-6"></div>
          <div className="flower_light flower_light-7"></div>
          <div className="flower_light flower_light-8"></div>
        </div>
      </div>

      <div className="light light-1"></div>
      <div className="light light-2"></div>
      <div className="light light-3"></div>
      <div className="light light-4"></div>
      <div className="light light-5"></div>
      <div className="light light-6"></div>
      <div className="light light-7"></div>
      <div className="light light-8"></div>
      <div className="light light-9"></div>
      <div className="light light-10"></div>
      <div className="light light-11"></div>
      <div className="light light-12"></div>
    </>
  );
};
