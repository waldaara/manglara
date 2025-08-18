import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
  newEmail: string;
  url: string;
}

export const ChangeEmailVerification = ({ url, name, newEmail }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>Tenemos que asegurarnos de que realmente eres tú 🧐</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded-2xl border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Heading className="font-extrabold">Manglara</Heading>
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Verificación de cambio de correo electrónico
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hola {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Para cambiar tu dirección de correo electrónico ({newEmail}),
              necesitamos verificar que realmente eres tú. Haz clic en el botón
              de abajo para confirmar.
            </Text>
            <Section className="mt-[32px] mb-[32px] text-center">
              <Button
                className="rounded-2xl bg-black px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={url}
              >
                Confirmar
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              o copia y pega esta URL en tu navegador:{" "}
              <Link
                href={url}
                className="text-wrap break-all text-blue-600 no-underline"
              >
                {url}
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ChangeEmailVerification.PreviewProps = {
  url: "https://manglara.aragundy.com/api/auth/verify-email?token=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRhdmlkYXJhZ3VuZHlAb3V0bG9vay5jb20iLCJpYXQiOjE3NDE5Njc4NzQsImV4cCI6MTc0MTk3MTQ3NH0.9AjvRxMX1jwIw7XfagZThFe9eTBtc8utmM3VV7F8jqs&callbackURL=/",
  name: "David Aragundy",
} as Props;

export default ChangeEmailVerification;
