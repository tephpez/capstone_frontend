export default function ParkCard(props) {
    return (
      <div id="park-cards">
        {props.parkContent &&
          props.eventContent.map((event) => (
            <div className="concert-card">
              <img
                className="concert-card-image"
                src={event.image}
                alt="Concert"
              />
              <h3>{event.artist}</h3>
              <p>
                {event.date} at {event.time} PM
              </p>
            </div>
          ))}
      </div>
    );
  }
  