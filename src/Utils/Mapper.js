export default films => {
  return films.map(({ name: title, ...props }) => ({
    title,
    ...props,
  }));
};
