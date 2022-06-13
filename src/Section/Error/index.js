import iconError from "./icon-error.webp";

const Error = () => {
  return (
    <>
      <h3>Ładowanie nie powiodło się.</h3>
      <img src={iconError} width="50" height="50" alt="błąd" />
      <p>
        Wystąpił błąd podczas pobierania aktualnych kursów walut. Proszę odśwież
        stronę lub spróbuj ponownie za chwilę.
      </p>
    </>
  );
};

export default Error;
