export function ContactForm({ isOpen, onClose }: any) {
  if (!isOpen) return null;
  return (
    <div>
      <h2>Contactar</h2>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}
