// ===========================================================
// ===========================================================
const ListColumn = ({ list, rowClass = '', bulletColor = 'primary' }) => {
  return (
    <div className={'row gy-3 ' + rowClass}>
      {list.map((item, i) => (
        <div className="col-xl-12" key={i}>
          <ul className={`icon-list bullet-bg bullet-soft-${bulletColor} mb-0`}>
            {item.map((li, i) => {
              const liProps =
                i !== 0
                  ? {
                      className: 'mt-3'
                    }
                  : {};
              return (
                <li key={li} {...liProps}>
                  <i className="uil uil-asterisk" /> {li}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListColumn;
