import Avatar from './Avatar';

import avatar1 from '../../avatars/gamer.png';
import avatar2 from '../../avatars/hacker.png';
import avatar3 from '../../avatars/man.png';
import avatar4 from '../../avatars/man2.png';
import avatar5 from '../../avatars/profile.png';
import avatar6 from '../../avatars/user.png';
import avatar7 from '../../avatars/woman.png';
import avatar8 from '../../avatars/woman2.png';

const Avatars = () => {
  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
  ];

  return (
    <div className="avatars">
      {avatars.map((avatar) => (
        <Avatar avatar={avatar} key={avatar} />
      ))}
    </div>
  );
};

export default Avatars;
