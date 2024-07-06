
const ModalContainer = ({ children, isOpen }) => {
  return (
    isOpen && (
      <div className={`fixed inset-0 mx-auto flex justify-center pt-4 pb-10 h-dvh w-full backdrop-blur-md bg-cream/60 z-50`}>
        {children}
      </div>
    )
  );
};

export default ModalContainer;