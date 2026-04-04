/* ========== CAROUSEL STYLES ========== */
.carousel-card {
  position: relative;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: #1a1a1a;
  cursor: grab;
}

.carousel-container:active {
  cursor: grabbing;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-out;
}

.carousel-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100%;
  background: #1a1a1a;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Dots Only (No Buttons) */
.carousel-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.dot.active {
  background: #d4af37;
  box-shadow: 0 0 10px #d4af37;
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(212, 175, 55, 0.9);
}
