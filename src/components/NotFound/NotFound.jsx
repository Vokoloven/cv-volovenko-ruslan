import { Boxes } from 'Theme/Boxes';

const NotFound = () => {
  return (
    <Boxes display={'flex'}>
      <Boxes as={'h3'} mt={4}>
        Sorry, but we didn't found the page
      </Boxes>
    </Boxes>
  );
};

export default NotFound;
