import { Card, CardContent, ImageContent, TextContent, TitleContent } from "./styles";

export default function Content3() {
  return (
          <Card className="center"> 
            <CardContent>
              <TitleContent>Programa Advanced</TitleContent>
              <TextContent>
                É um programa para formação avançada de Desenvolvedores Mobile no modelo bootcamp (aprendizagem intensiva e acelerada) com duração de aproximadamente 20 semanas que tem como objetivo capacitar profissionais com os conhecimentos e experiência necessários para desenvolver aplicações mobile multiplataforma de acordo com as melhores práticas do mercado
              </TextContent>
              <ImageContent src="https://www.growdev.com.br/assets/images/home/home_advanced2.png" alt="Programa Advanced" />
            </CardContent>
          </Card>
  )
}
