import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { memo } from "react";

export const SearchInput = memo(() => {
  return (
    <div>
      <SButtonWrapeer>
        <Input placeholder="検索条件を入力" />
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapeer>
    </div>
  );
});

const SButtonWrapeer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  column-gap: 8px;
`;
