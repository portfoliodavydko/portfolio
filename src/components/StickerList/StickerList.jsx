import Button from '../Button/Button';
import Sticker from '../Sticker/Sticker';
import { List, Text, Title } from './StickerList.style';

const GOOGLE_DRIVE_LINK_CV =
  'https://drive.google.com/file/d/11U-3hFuz7HPu10mejzOnEWE6gcxL50Ne/view?usp=drive_link';

const GOOGLE_DRIVE_LINK_CERTIFICATE =
  'https://drive.google.com/file/d/1YHoDo93ILb36w5_TEsI8QXgSskRXu3Q1/view?usp=drive_link';
const StickerList = () => {
  const handleOpenCv = () => {
    window.open(GOOGLE_DRIVE_LINK_CV, '_blank');
  };

  const handleOpenCertificate = () => {
    window.open(GOOGLE_DRIVE_LINK_CERTIFICATE, '_blank');
  };

  return (
    <List>
      <Sticker>
        <Title>View my certificate</Title>
        <Text>
          Yes, I am already officially June in this field, so let's work 😎
        </Text>
        <Button
          text={'Review'}
          position="0"
          handleOpen={handleOpenCertificate}
        ></Button>
      </Sticker>
      <Sticker>
        <Title>Are you an Employer or a Recruiter?</Title>
        <Text>I'll say that I'm right for you, hahaha 🤭</Text>
        <Button text={'Download CV'} position="0" handleOpen={handleOpenCv} />
      </Sticker>
    </List>
  );
};

export default StickerList;
