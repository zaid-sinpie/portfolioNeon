import "../css/overlay.css";

export default function Overlay({ overlayClass }) {
  return (
    <div className={overlayClass}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3">
            <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        </div>
    </div>
  );
}
