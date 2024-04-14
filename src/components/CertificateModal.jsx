export default function CertificateModal({ certiModal, bgImage }) {

  return (
    <div 
      className={certiModal}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // onError={onError}
    ></div>
  );
}
