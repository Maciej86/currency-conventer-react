import iconError from "./icon-error.webp";
import { Heading, MessageError } from "./styled";

const Error = () => (
  <>
    <Heading>Ładowanie nie powiodło się.</Heading>
    <img src={iconError} width="50" height="50" alt="błąd" />
    <MessageError>
      Wystąpił błąd podczas pobierania aktualnych kursów walut. Proszę{" "}
      <b>odśwież stronę lub spróbuj ponownie</b> za chwilę.
    </MessageError>
  </>
);

export default Error;
