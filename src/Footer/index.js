import { StyledFooter, Link } from "./styled";

const Footer = () => (
  <StyledFooter>
    <p>
      Wykonanie w ramach nauki programowania{" "}
      <Link href="https://youcode.pl">YouCode</Link>
    </p>
    <p>
      Photo by{" "}
      <Link href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Visual Stories || Micheile
      </Link>{" "}
      on{" "}
      <Link href="https://unsplash.com/s/photos/money?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </Link>
    </p>
  </StyledFooter>
);

export default Footer;
