// ==================================================
// ==================================================
const Accordion = (props) => {
  const { no, body, heading, expand, type = '', parent } = props;
  return (
    <div className={`card ${type} accordion-item`}>
      <div className="card-header" id={`heading${no}`}>
        <button
          data-bs-toggle="collapse"
          aria-controls={`collapse${no}`}
          data-bs-target={`#collapse${no}`}
          aria-expanded={expand ? 'true' : 'false'}
          className={expand ? 'accordion-button' : 'collapsed'}
        >
          {heading}
        </button>
      </div>

      <div
        id={`collapse${no}`}
        aria-labelledby={`heading${no}`}
        data-bs-parent={`#${parent}`}
        className={`accordion-collapse collapse ${expand && 'show'}`}
      >
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
