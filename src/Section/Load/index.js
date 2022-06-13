import iconLoad from "./icon-load.webp";

const Load = () => (
  <>
    <h3>Ładuję dane...</h3>
    <img src={iconLoad} width="50" height="50" alt="ładowanie..." />
    <p>
      Kursy walut są pobierane z <b>Europejskiego Banku Centralnego</b>
    </p>
  </>
);

export default Load;
