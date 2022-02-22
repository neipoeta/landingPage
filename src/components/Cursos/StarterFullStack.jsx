import { Card2, CardContent, ImageContent2, TextContent, TitleContent } from "./styles";

export default function StarterFullStack() {
  return (
        <Card2 className="card2"> 
          <TitleContent>Programa Starter FullStack Web</TitleContent>
            <CardContent>
            <ImageContent2 src="https://www.growdev.com.br/assets/images/home/starter.jpg" alt="Programa Starter" />
              <TextContent>
                Você não possui conhecimento de programação ou conhece mas não se sente seguro para ingressar no mercado como desenvolvedor(a) de software? Este programa é para você!
                Torne-se um(a) Desenvolvedor(a) Web FullStack
                Aprenda NodeJS, ReactJS e PostgreSQL
                Trabalhe com projetos reais de software
              </TextContent>
            </CardContent>
        </Card2>
  )
}
