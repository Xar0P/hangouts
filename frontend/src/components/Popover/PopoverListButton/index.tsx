import { MouseEvent } from 'react';
import { BordersType, SizeType } from '../../../assets/Foods';
import { ButtonSize } from '../step/PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverListButtonProps {
  item: string,
  price: number,
  descricao?: string,
  plusIcon?: boolean,
  setStepOn: (sizeName: SizeType & BordersType) => void,
  setValue: (value: number) => void,
  valueWish: number,
}
export function PopoverListButton({
  item, descricao, price, plusIcon, setStepOn, setValue, valueWish,
}: PopoverListButtonProps) {
  function setarValores(size: string, price: number) {
    setValue(Number(valueWish) + price);
    setStepOn(size as SizeType & BordersType);
  }

  return (
    <div>
      <hr />
      <ButtonSize
        onClick={() => setarValores(item, price)}
        type="button"
      >
        <div>
          <p>{ item }</p>
          <span>{ descricao }</span>
        </div>
        <span>
          { plusIcon && '+ ' }
          R$
          {' '}
          <span id="preco">{price.toFixed(2)}</span>
        </span>
      </ButtonSize>
    </div>
  );
}
