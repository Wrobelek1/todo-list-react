
import Input from "../../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";
import { Wrapper } from "./styled";

export default () => {
    const query = useQueryParameter("szukaj");
    const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
        key: "szukaj",
        value: target.value.trim() !== "" ? target.value : undefined,
    });
  };
  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
