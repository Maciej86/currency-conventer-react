import { useDataApi } from "./useDataAPI";
import { StyledSection } from "./styled";
import Load from "./Load";
import Form from "./Form";
import Error from "./Error";
import Header from "./Header";

const Section = () => {
  const { currencies, dateApi, messageApi } = useDataApi();
  let content = "";

  switch (messageApi) {
    case "loading":
      content = <Load />;
      break;
    case "ok":
      content = <Form dataApi={currencies} dateApi={dateApi} />;
      break;
    default:
      content = <Error />;
  }

  return (
    <StyledSection>
      <Header />
      {content}
    </StyledSection>
  );
};

export default Section;
