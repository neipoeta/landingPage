import {  CenterFooter, FooterPage, Form, FormContent, FormTitle, InputSubmit, InputText, MainFooter } from "./styles";

export default function Footer() {
  return (
    <FooterPage id='footer'>
      <MainFooter>
            <CenterFooter className="center">
                <FormTitle>Entre em Contato!</FormTitle>
                    <Form>    
                        <FormContent>
                            <InputText placeholder="Seu nome..." type="text" />
                            <InputText placeholder="Seu telefone..." type="text" />
                            <InputText placeholder="Seu e-mail..." type="text" />
                            <InputText placeholder="Seu assunto..." type="text" />
                            <InputSubmit type="submit" />
                        </FormContent>
                    </Form>
            </CenterFooter>
        </MainFooter>
    </FooterPage>
  )
}
