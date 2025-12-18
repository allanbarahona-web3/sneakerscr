export function CheckoutModal({ isOpen, onClose }: any) {
  if (!isOpen) return null;
  return (
    <div>
      <h2>Carrito</h2>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}
