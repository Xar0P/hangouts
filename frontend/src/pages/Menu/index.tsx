/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { FlavorDB } from '../../constants/module';
import { Header, NavigationBar } from '../../layouts';
import { useGetFlavorsFilterMutation } from '../../services/api/Auth';
import { Section, Div } from './Menu.styles';

export function Menu() {
  const [isLoadingFlavors, setIsLoadingFlavors] = useState<boolean>(false);
  const [flavorFilter, setFlavorFilter] = useState<string>('');
  const [objSabores, setObjSabores] = useState<FlavorDB[]>();
  const [getFlavors] = useGetFlavorsFilterMutation();

  // DB SABORES
  useEffect(() => {
    setIsLoadingFlavors(true);
    async function getFlavorsEffect() {
      const data = await getFlavors({ filter: flavorFilter }) as any;
      setObjSabores(data.data);
      console.log(objSabores);
      setIsLoadingFlavors(false);
    }
    getFlavorsEffect();
  }, [flavorFilter]);

  return (
    <>
      <NavigationBar />
      <Header title="Cardápio" />

      <Section>
        <input
          type="text"
          name="filtro"
          placeholder="Digite o sabor que deseja"
          onChange={(e) => setFlavorFilter(e.target.value)}
        />
      </Section>

      { !isLoadingFlavors ? (
        <Div>
          { objSabores && objSabores?.map(({ id_flavor_category, name, flavor }) => (
            <>
              <h2 key={id_flavor_category}>{name}</h2>
              <br />
              { flavor.map(({ id_flavor, name, flavor_ingredient }) => (
                <>
                  <p key={id_flavor}>{name}</p>
                  {/* {flavor_ingredient.map(({
                    ingredient: {
                      id_ingredient, name, quantidade,
                    },
                  }) => (
                    <span>{`${name}, `}</span>
                  ))} */}
                  <br />
                </>
              )) }
            </>
          )) }
        </Div>
      ) : (
        <h1>CARREGANDO</h1>
      ) }
    </>
  );
}
