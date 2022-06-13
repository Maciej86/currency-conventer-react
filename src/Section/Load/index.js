import loadSpiner from "./load-spiner.webp";

const Load = () => {
  return (
    <>
      <h3>Ładuję dane...</h3>
      <img src={loadSpiner} width="50" height="50" />
      <p>
        Kursy walut są pobierane z <b>Europejskiego Banku Centralnego</b>
      </p>
    </>
  );
};

export default Load;
