import { useDataApi } from "./useDataAPI";
import { StyledSection } from "./styled";
import Load from "./Load";
import Form from "./Form";
import Header from "./Header";

const Section = () => {
  const { currencies, dateApi, messageApi } = useDataApi();
  let content = "";

  // Obsługa ładowania oraz błędu będzie
  // bardziej rozbudowana o komponenty
  // na razie trochę na skróty.
  switch (messageApi) {
    case "loading":
      content = <Load />;
      break;
    case "ok":
      content = <Form dataApi={currencies} dateApi={dateApi} />;
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
