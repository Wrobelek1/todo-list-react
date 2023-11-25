import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Jakub Wróblewski"
      body={
        <p>
          Bardzo lubie grać w koszykówke oraz jezdzic na rowerze. Z innych
          rzeczy także lubię matematykę.
          <span>
            {" "}
            Chodzę równierz na siłownię i to jest moja <strong>najwieksza</strong>{" "}
            pasja.
          </span>
        </p>
      }
    />
  </Container>
);

export default Author;
