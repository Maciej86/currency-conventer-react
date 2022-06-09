import { useDataApi } from "./useDataAPI";
import { StyledSection } from "./styled";
import Form from "./Form";
import Header from "./Header";

const Section = () => {
  const { messageApi } = useDataApi();
  let content = "";

  // Obsługa ładowania oraz błędu będzie
  // bardziej rozbudowana o komponenty
  // na razie trochę na skróty.
  switch (messageApi) {
    case "loading":
      content = <p>Pobieram dane...</p>;
      break;
    case "ok":
      content = <Form />;
      break;
  }

  return (
    <StyledSection>
      <Header />
      {content}
    </StyledSection>
  );
};

export default Section;
