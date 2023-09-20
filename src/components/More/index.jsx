import favIcon from '@/assets/images/icons/StarIcon.svg';
import DelIcon from '@/assets/images/icons/DelIcon.svg';
import NavBarItem from "../Navbar/NavBarItem";
import { useState } from 'react';

const moreItem = [
  {
    id : 1,
    name: "علاقه‌مندی‌ها",
  },
  {
    id : 2,
    name: "حذف شده‌ها",
  },
];
function More() {
  const [Selected, setSelected] = useState(null);

  return (
    <section className="folders-container">
      <header>
        <h2>بیشتر</h2>
      </header>

      <div className="more">
        {moreItem.map((item) => (
          <NavBarItem
            key={item.id}
            text={item.name}
            icon={item.id === 1 ? favIcon : DelIcon}
            selected={item.id === Selected}
            onClick={() => setSelected(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default More;
