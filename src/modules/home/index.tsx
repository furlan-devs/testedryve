import { useEffect, useState } from "react";
import { Icon } from "../../components";
import { Card } from "../../components/Card";
import * as S from "./styles";

export const HomePage: React.FC = () => {
  const [vehicles, setvehicles] = useState([]);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5eb553df31000060006994a8")
      .then((response) => response.json())
      .then((data) => {
        setvehicles(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setvehicles]);

  console.log(vehicles);

  return (
    <S.HomeContainer>
      <S.TopContent>
        <Card title="avaliações hoje" result={56} status={56} icon="car" />
        <Card
          title="Carros Publicados"
          result={397}
          status={4}
          icon="computer"
        />
        <Card
          isMoney={true}
          title="Ticket Médio do Estoque"
          result={56}
          status={-16}
          icon="dollarSign"
        />
      </S.TopContent>

      <S.BottomContent>
        <S.LeftContent>
          <S.LeftContentTop>
            <h1>Últimas avaliações</h1>
            <a>
              Hoje<Icon type="downArrow" size={25}></Icon>
            </a>
          </S.LeftContentTop>
          <S.LeftContentLabels>
            <p>Dados do Veículo</p>
            <p>Valor</p>
            <p>Status</p>
          </S.LeftContentLabels>
          <S.LeftContentList>
            {vehicles.map((item) => (
              <S.ListItem>
                <S.FotoVeiculo>
                  <img src={item.image} alt="Foto" />
                </S.FotoVeiculo>
                <S.DadosVeiculo>
                  <h1>{item.name}</h1>
                  <p>GDL8019</p>
                  <p>
                    {item.model_year} -{item.fuel_type}
                  </p>
                  <p>
                    {item.transmission_type} - {item.mileage} KM
                  </p>
                </S.DadosVeiculo>
                <S.Valor>
                  <p>Anuncio</p>
                  <h1>R$ {item.ad_selling_price}</h1>
                  <p>Mínimo aceito</p>
                  <p>R$ {item.ad_selling_price}</p>
                </S.Valor>
                <S.Status>
                  <div>
                    <p>Aguardando precificação</p>
                  </div>
                  <p>18/04/2020 às 14:35</p>
                </S.Status>
              </S.ListItem>
            ))}
          </S.LeftContentList>
          <S.LeftContentFooter>
            <a>
              Ver tudo<Icon type="rightArrow" size={25}></Icon>
            </a>
          </S.LeftContentFooter>
        </S.LeftContent>
        <S.RightContent>
          <S.RigthCardTop>Coming Soon</S.RigthCardTop>
          <S.RigthCardBottom>Coming Soon</S.RigthCardBottom>
        </S.RightContent>
      </S.BottomContent>

      <S.Footer>2023 Matheus Furlan Lemes</S.Footer>
    </S.HomeContainer>
  );
};

export default HomePage;
