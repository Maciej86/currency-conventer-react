import { StyledFooter, StyledFooterLink } from "./styled";

const Footer = () => (
	<StyledFooter>
		<p>
			Wykonanie w ramach nauki programowania{" "}
			<StyledFooterLink href="https://youcode.pl">YouCode</StyledFooterLink>
		</p>
		<p>
			Photo by{" "}
			<a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
				Visual Stories || Micheile
			</a>{" "}
			on{" "}
			<a href="https://unsplash.com/s/photos/money?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
				Unsplash
			</a>
		</p>
	</StyledFooter>
);

export default Footer;
