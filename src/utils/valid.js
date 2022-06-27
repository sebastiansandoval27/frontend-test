export const validText = (value) => {
  let letters = /^[a-zA-Z\s]*$/g;
  if (!value.match(letters)) {
    alert("Por favor ingresa un valor válido");
    return false;
  }
  return true;
};
