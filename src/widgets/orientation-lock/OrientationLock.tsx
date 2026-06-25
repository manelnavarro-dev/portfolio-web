export function OrientationLock() {
  return (
    <div className="orientation-lock" aria-hidden="true">
      <div className="orientation-lock__content">
        <p className="orientation-lock__icon">↻</p>
        <p className="orientation-lock__title">Gira el móvil</p>
        <p className="orientation-lock__text">
          Esta web está optimizada para verse en vertical desde dispositivos móviles.
        </p>
      </div>
    </div>
  );
}
