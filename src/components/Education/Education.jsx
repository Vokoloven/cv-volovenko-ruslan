import { Boxes } from 'Theme/Boxes';

import { educationList } from './educationList';

export const Education = () => {
  return (
    <Boxes
      display={'flex'}
      flexDirection={'column'}
      mt={4}
      maxWidth={600}
      pb={4}
    >
      <h2>Education</h2>
      {educationList.map(({ title, dateDue, direction }) => {
        return (
          <Boxes key={title}>
            <Boxes as={'h3'} mt={2} key={title}>
              {title}
            </Boxes>
            <Boxes as={'ul'} mt={2}>
              <Boxes as={'li'} mt={1}>
                {dateDue}
              </Boxes>
              <Boxes as={'li'} mt={1}>
                {direction}
              </Boxes>
            </Boxes>
          </Boxes>
        );
      })}
    </Boxes>
  );
};
