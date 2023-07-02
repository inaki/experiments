export const createModalAppendEl = (tag: string, id: string) => {
  const modalRoot = document.createElement(tag);
  modalRoot.id = id;
  document.body.appendChild(modalRoot);
  return modalRoot;
};
