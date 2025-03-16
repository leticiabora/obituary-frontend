import { LeafIcon, TreeIcon } from '@/assets/icons';
import { Bottom, Center, Circle, CircleMobile, Container, Icon, Step } from './Steps.styles';

const data = [
  {
    title: 'Plant a memory',
    description: 'Honor your fellow by creating a lasting tribute',
  },
  {
    title: 'Nurture a Memory',
    description: 'Keep memories alive by engaging and sharing your thoughts',
  },
  {
    title: 'Preserve Memories',
    description: 'Spread their legacy by sharing cherished moments',
  },
];

const Steps = () => {
  return (
    <Container>
      <Circle>
        {data.map((item) => (
          <Step key={item.title}>
            <Icon>
              <p>{item.title}</p>
              <span>{item.description}</span>
            </Icon>
          </Step>
        ))}
        <Center>
          <LeafIcon width={80} height={80} color="grey" />
        </Center>
        <Bottom>
          <Icon>
            <TreeIcon width={120} height={120} />
          </Icon>
        </Bottom>
      </Circle>
      <CircleMobile>
        {data.map((item) => (
          <Step key={item.title}>
            <Icon>
              <p>{item.title}</p>
              <span>{item.description}</span>
            </Icon>
          </Step>
        ))}
      </CircleMobile>
    </Container>
  );
};

export default Steps;
