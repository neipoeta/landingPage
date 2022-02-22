import { Card, CardContent, ImageContent, TextContent, TitleContent } from "./styles";

export default function StarterUX() {
  return (
        <Card>
          <TitleContent>Programa Starter UX/UI Designer</TitleContent>
            <CardContent>
              <TextContent>
                Você não possui conhecimento de design ou até conhece mas não tem as competências técnicas para entrar no mercado de trabalho como UX/UI Designer? Este programa é para você!
                Torne-se um(a) designer de produtos digitais (ux/ui designer)
                Aprenda Figma, Illustrator, Photoshop, CSS e HTML
                Trabalhe com projetos reais de empresas parceiras!
              </TextContent>
              <ImageContent src="https://www.growdev.com.br/assets/images/home/uxui.png" alt="Ux Design" />
            </CardContent>
        </Card>
  )
}
