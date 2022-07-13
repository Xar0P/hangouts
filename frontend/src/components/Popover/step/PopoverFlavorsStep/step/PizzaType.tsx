/* eslint-disable camelcase */
import { FlavorDB } from '../../../../../constants/module';
import { Div } from '../PopoverFlavorsStep.styles';

interface PizzaTypeProps {
  type: string,
  objSabores?: FlavorDB[],
  checkFlavors: (flavor: string, price: number) => void,
}
export function PizzaType({ type, objSabores, checkFlavors }: PizzaTypeProps) {
  return (
    <>
      { objSabores && objSabores.map(({
        name, flavor_category, flavor_type, flavor_ingredient,
      }) => (
        <>
          {/** */}
          { flavor_type.name === type && (
          <Div>
            <hr />
            <input
              key={name}
              type="checkbox"
              id={name}
              onChange={() => checkFlavors(name, flavor_category.price)}
              className="input"
            />
            <label
              htmlFor={name}
            >
              <div>
                <p>{ name }</p>
                { flavor_ingredient.map(({ ingredient: { name } }, index, array) => (
                  <span>{`${name}${array.length > index + 1 ? ', ' : ''}`}</span>
                )) }
              </div>
              <span>
                + R$
                {' '}
                {flavor_category.price.toFixed(2)}
              </span>

            </label>

          </Div>
          ) }
        </>
      )) }
      <hr />
    </>
  );
}
