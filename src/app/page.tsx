import Steps from '@/components/pages/home/Steps/Steps';
import { ActionContainer, Actions, ButtonContainer, Container, Main, Subtitle, Title, TitleContainer } from './MainPage.styles';
import CustomLink from '@/components/CustomLink/CustomLink';

export default function Home() {
  return (
    <Container>
      <Main>
          <TitleContainer>
            <Title>About my fellow</Title>
            <h2>A thoughtful space for remembrance and celebration</h2>
            <h3>
              <Subtitle>
                Reinterpreting longing, embracing memories, and celebrating the
                continuity of life
              </Subtitle>
            </h3>
        </TitleContainer>
        <ActionContainer>
            <Actions>
              <p>
                Share the memories of your loved ones — both people and pets —
                in a space of tribute and connection.
              </p>
              <p>
                Join us to honor their lives and keep their memories alive. Each
                memory planted becomes a part of a growing legacy, nurturing
                love, remembrance, and togetherness across generations.
              </p>
              <ButtonContainer>
                <CustomLink variant="button" href="/auth/login">
                  Login
                </CustomLink>
                <CustomLink variant="outlined" href="/memorial">
                  Check memorial
                </CustomLink>
              </ButtonContainer>
            </Actions>
          <Actions>
            <Steps />
          </Actions>
          </ActionContainer>
      </Main>
    </Container>
  );
}
